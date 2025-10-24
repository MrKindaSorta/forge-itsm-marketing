-- Tenant Database Template (Exported from Production)
-- This schema is deployed to each new customer's isolated D1 database
-- Exported from: itsm-db (ec5db7dc-b6a2-4079-be6f-f8f5d5200647)
-- Export date: 2025-10-24T15:13:50.962Z

-- ========== ACTIVITIES TABLE ==========
CREATE TABLE "activities" (
  id TEXT PRIMARY KEY,
  ticket_id TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('comment', 'internal_note', 'status_change', 'assignment', 'priority_change', 'system', 'attachment', 'cc_change')),
  content TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  is_internal INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  metadata TEXT,
  parent_activity_id TEXT,
  is_flagged INTEGER DEFAULT 0,
  flagged_by INTEGER,
  flagged_at DATETIME,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES users(id),
  FOREIGN KEY (parent_activity_id) REFERENCES activities(id) ON DELETE SET NULL,
  FOREIGN KEY (flagged_by) REFERENCES users(id) ON DELETE SET NULL
);

-- ========== ARTICLE_ATTACHMENTS TABLE ==========
CREATE TABLE article_attachments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_type TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  uploaded_by INTEGER NOT NULL,
  uploaded_at TEXT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- ========== ARTICLE_FEEDBACK TABLE ==========
CREATE TABLE article_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  is_helpful INTEGER NOT NULL CHECK(is_helpful IN (0, 1)),
  created_at TEXT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(article_id, user_id)
);

-- ========== ARTICLE_SUGGESTIONS TABLE ==========
CREATE TABLE article_suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  ticket_category TEXT NOT NULL,
  relevance_score INTEGER DEFAULT 0,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  UNIQUE(article_id, ticket_category)
);

-- ========== ARTICLE_TAGS TABLE ==========
CREATE TABLE article_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  tag_name TEXT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

-- ========== ARTICLES TABLE ==========
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('draft', 'published')) DEFAULT 'draft',
  views INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  not_helpful_count INTEGER DEFAULT 0,
  created_by INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  deleted_at TEXT,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- ========== ATTACHMENTS TABLE ==========
CREATE TABLE attachments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ticket_id INTEGER NOT NULL,
  activity_id INTEGER,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_type TEXT NOT NULL,
  r2_key TEXT NOT NULL UNIQUE,
  uploaded_by INTEGER NOT NULL,
  uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- ========== BRANDING_CONFIGURATION TABLE ==========
CREATE TABLE branding_configuration (
      id TEXT PRIMARY KEY DEFAULT 'default',
      config_json TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

-- ========== CATEGORIES TABLE ==========
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL DEFAULT 'FileText',
  color TEXT NOT NULL DEFAULT 'text-blue-500',
  sort_order INTEGER DEFAULT 0,
  created_at TEXT NOT NULL
, display_order INTEGER DEFAULT 0);

-- ========== FORM_CONFIGURATIONS TABLE ==========
CREATE TABLE form_configurations (
      id TEXT PRIMARY KEY DEFAULT 'default',
      config_json TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

-- ========== NOTIFICATIONS TABLE ==========
CREATE TABLE notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN (
    'ticket_assigned',
    'ticket_updated',
    'ticket_commented',
    'ticket_cc_updated',
    'status_changed',
    'priority_changed',
    'sla_warning',
    'ticket_resolved',
    'mention',
    'activity_flagged'
  )),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  ticket_id TEXT,
  action_url TEXT,
  metadata TEXT DEFAULT '{}',
  created_at TEXT NOT NULL,
  read_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ========== SLA_RULES TABLE ==========
CREATE TABLE sla_rules (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  enabled INTEGER DEFAULT 1,

  
  priority_conditions TEXT,    
  category_conditions TEXT,    
  department_conditions TEXT,  

  
  first_response_minutes INTEGER NOT NULL,
  resolution_minutes INTEGER NOT NULL,

  
  escalation_enabled INTEGER DEFAULT 0,
  escalation_after_minutes INTEGER,
  escalation_new_priority TEXT,

  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
, team_conditions TEXT, location_conditions TEXT, job_title_conditions TEXT, manager_conditions TEXT);

-- ========== SYSTEM_SETTINGS TABLE ==========
CREATE TABLE system_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  
  allow_public_signup INTEGER DEFAULT 1,  
  default_assignment TEXT DEFAULT 'manual',  
  enable_time_tracking INTEGER DEFAULT 1,
  enable_attachments INTEGER DEFAULT 1,
  enable_email_to_ticket INTEGER DEFAULT 0,
  enable_knowledge_base INTEGER DEFAULT 1,

  
  email_domain TEXT,
  email_from_address TEXT,
  email_from_name TEXT,
  enable_email_notifications INTEGER DEFAULT 1,
  enable_email_replies INTEGER DEFAULT 0,

  
  password_min_length INTEGER DEFAULT 6,
  password_require_uppercase INTEGER DEFAULT 0,
  password_require_lowercase INTEGER DEFAULT 0,
  password_require_numbers INTEGER DEFAULT 0,
  password_require_special INTEGER DEFAULT 0,
  password_expiry_days INTEGER DEFAULT 0,  
  max_login_attempts INTEGER DEFAULT 5,
  lockout_duration_minutes INTEGER DEFAULT 15,
  session_timeout_minutes INTEGER DEFAULT 480,  
  enable_2fa INTEGER DEFAULT 0,
  force_password_change_first_login INTEGER DEFAULT 1,

  
  permission_matrix TEXT DEFAULT '{}',

  
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_by INTEGER,

  FOREIGN KEY (updated_by) REFERENCES users(id)
);

-- ========== TICKET_CC TABLE ==========
CREATE TABLE ticket_cc (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ticket_id TEXT NOT NULL,
      user_id INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      UNIQUE(ticket_id, user_id)
    );

-- ========== TICKETS TABLE ==========
CREATE TABLE tickets (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'open', 'in_progress', 'waiting', 'resolved', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high', 'urgent')),
  category TEXT NOT NULL,

  
  requester_id INTEGER NOT NULL,
  assignee_id INTEGER,

  
  department TEXT,
  tags TEXT, 
  custom_fields TEXT, 

  
  first_response_due TEXT, 
  resolution_due TEXT, 
  sla_status TEXT DEFAULT 'green' CHECK(sla_status IN ('green', 'yellow', 'red')),

  
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  due_date TEXT,
  resolved_at TEXT,
  closed_at TEXT, opened_by_id INTEGER, opened_at TEXT,

  
  FOREIGN KEY (requester_id) REFERENCES users(id),
  FOREIGN KEY (assignee_id) REFERENCES users(id)
);

-- ========== USER_NOTIFICATION_PREFERENCES TABLE ==========
CREATE TABLE user_notification_preferences (
  user_id INTEGER PRIMARY KEY,
  ticket_assigned INTEGER DEFAULT 1,
  ticket_updated INTEGER DEFAULT 1,
  ticket_commented INTEGER DEFAULT 1,
  ticket_cc_updated INTEGER DEFAULT 1,
  status_changed INTEGER DEFAULT 1,
  priority_changed INTEGER DEFAULT 1,
  sla_warning INTEGER DEFAULT 1,
  ticket_resolved INTEGER DEFAULT 1,
  mention INTEGER DEFAULT 1,
  activity_flagged INTEGER DEFAULT 1,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ========== USERS TABLE ==========
CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL, role TEXT NOT NULL CHECK (role IN ('user', 'agent', 'manager', 'admin')), department TEXT, team TEXT, avatar TEXT, active INTEGER NOT NULL DEFAULT 1, notification_preferences TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, last_login DATETIME, password_hash TEXT, password_salt TEXT, phone TEXT, mobile_phone TEXT, location TEXT, job_title TEXT, manager TEXT, deleted_at TEXT DEFAULT NULL, permanently_deleted INTEGER DEFAULT 0 CHECK(permanently_deleted IN (0, 1)), require_password_change INTEGER DEFAULT 0, view_preferences TEXT);

-- ========== INDEXES ==========
CREATE INDEX idx_activities_author ON activities(author_id);
CREATE INDEX idx_activities_created ON activities(created_at);
CREATE INDEX idx_activities_parent ON activities(parent_activity_id);
CREATE INDEX idx_activities_ticket ON activities(ticket_id);
CREATE INDEX idx_article_attachments_article ON article_attachments(article_id);
CREATE INDEX idx_article_feedback_article ON article_feedback(article_id);
CREATE INDEX idx_article_suggestions_category ON article_suggestions(ticket_category);
CREATE INDEX idx_article_tags_article ON article_tags(article_id);
CREATE INDEX idx_article_tags_name ON article_tags(tag_name);
CREATE INDEX idx_articles_category ON articles(category_id);
CREATE INDEX idx_articles_created_by ON articles(created_by);
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_attachments_activity ON attachments(activity_id);
CREATE INDEX idx_attachments_r2_key ON attachments(r2_key);
CREATE INDEX idx_attachments_ticket ON attachments(ticket_id);
CREATE INDEX idx_categories_display_order ON categories(display_order);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
CREATE INDEX idx_notifications_read_at ON notifications(read_at);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_sla_rules_created ON sla_rules(created_at);
CREATE INDEX idx_sla_rules_enabled ON sla_rules(enabled);
CREATE INDEX idx_ticket_cc_ticket_id ON ticket_cc(ticket_id);
CREATE INDEX idx_ticket_cc_user_id ON ticket_cc(user_id);
CREATE INDEX idx_tickets_assignee ON tickets(assignee_id);
CREATE INDEX idx_tickets_category ON tickets(category);
CREATE INDEX idx_tickets_created_at ON tickets(created_at DESC);
CREATE INDEX idx_tickets_priority ON tickets(priority);
CREATE INDEX idx_tickets_requester ON tickets(requester_id);
CREATE INDEX idx_tickets_sla_status ON tickets(sla_status);
CREATE INDEX idx_tickets_status ON tickets(status);
CREATE INDEX idx_tickets_status_priority ON tickets(status, priority);
CREATE INDEX idx_users_deleted_at ON users(deleted_at);
CREATE INDEX idx_users_permanently_deleted ON users(permanently_deleted);
CREATE INDEX idx_users_require_password_change ON users(require_password_change);

-- ========== DEFAULT DATA ==========
-- Insert default system settings
INSERT INTO system_settings (
  allow_public_signup,
  default_assignment,
  enable_time_tracking,
  enable_attachments,
  enable_email_to_ticket,
  enable_knowledge_base,
  email_from_name,
  enable_email_notifications,
  enable_email_replies,
  password_min_length,
  password_require_uppercase,
  password_require_lowercase,
  password_require_numbers,
  password_require_special,
  password_expiry_days,
  max_login_attempts,
  lockout_duration_minutes,
  session_timeout_minutes,
  enable_2fa,
  force_password_change_first_login,
  permission_matrix
) VALUES (
  1,
  'manual',
  1,
  1,
  0,
  1,
  'ITSM Support',
  1,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  5,
  15,
  480,
  0,
  0,
  '{"ticket:create":["user","agent","manager","admin"],"ticket:view:own":["user","agent","manager","admin"],"ticket:view:all":["agent","manager","admin"],"ticket:edit":["agent","manager","admin"],"ticket:delete":["manager","admin"],"ticket:assign":["manager","admin"],"ticket:close":["manager","admin"],"ticket:resolve":["agent","manager","admin"],"user:view":["agent","manager","admin"],"user:create":["admin","manager"],"user:edit":["manager","admin"],"user:delete":["admin","manager"],"settings:view":["manager","admin"],"settings:edit":["admin"],"customize:view":["manager","admin"],"customize:edit":["admin","manager"],"reports:view":["agent","manager","admin"],"reports:export":["manager","admin"],"kb:view":["user","agent","manager","admin"],"kb:create":["agent","manager","admin"],"kb:edit":["agent","manager","admin"],"kb:delete":["manager","admin"],"dashboard:view":["agent","manager","admin"]}'
);
