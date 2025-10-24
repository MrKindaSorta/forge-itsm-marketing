-- Tenant Database Template
-- This schema is deployed to each new customer's isolated D1 database

-- ========== USERS TABLE ==========
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK(role IN ('user', 'agent', 'manager', 'admin')),
  active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0, 1)),
  department TEXT,
  team TEXT,
  avatar_url TEXT,
  phone TEXT,
  notification_preferences TEXT DEFAULT '{}', -- JSON object
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  require_password_change INTEGER DEFAULT 0,
  last_password_change TEXT,
  failed_login_attempts INTEGER DEFAULT 0,
  locked_until TEXT,
  deleted INTEGER DEFAULT 0,
  deleted_at TEXT,
  deleted_by INTEGER,
  permanently_deleted INTEGER DEFAULT 0 CHECK(permanently_deleted IN (0, 1)),
  last_login TEXT,
  mobile_phone TEXT,
  location TEXT,
  job_title TEXT,
  manager INTEGER,
  view_preferences TEXT DEFAULT '{}', -- JSON object for UI preferences
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_active ON users(active);
CREATE INDEX IF NOT EXISTS idx_users_department ON users(department);
CREATE INDEX IF NOT EXISTS idx_users_team ON users(team);
CREATE INDEX IF NOT EXISTS idx_users_permanently_deleted ON users(permanently_deleted);
CREATE INDEX IF NOT EXISTS idx_users_last_login ON users(last_login);

-- ========== TICKETS TABLE ==========
CREATE TABLE IF NOT EXISTS tickets (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'open', 'in_progress', 'waiting', 'resolved', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high', 'urgent')),
  category TEXT NOT NULL,
  requester_id INTEGER NOT NULL,
  assignee_id INTEGER,
  department TEXT,
  tags TEXT, -- JSON array
  custom_fields TEXT, -- JSON object
  first_response_due TEXT,
  resolution_due TEXT,
  sla_status TEXT DEFAULT 'green' CHECK(sla_status IN ('green', 'yellow', 'red')),
  opened_by INTEGER,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  due_date TEXT,
  resolved_at TEXT,
  closed_at TEXT,
  FOREIGN KEY (requester_id) REFERENCES users(id),
  FOREIGN KEY (assignee_id) REFERENCES users(id),
  FOREIGN KEY (opened_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_priority ON tickets(priority);
CREATE INDEX IF NOT EXISTS idx_tickets_requester ON tickets(requester_id);
CREATE INDEX IF NOT EXISTS idx_tickets_assignee ON tickets(assignee_id);
CREATE INDEX IF NOT EXISTS idx_tickets_created_at ON tickets(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tickets_category ON tickets(category);
CREATE INDEX IF NOT EXISTS idx_tickets_sla_status ON tickets(sla_status);
CREATE INDEX IF NOT EXISTS idx_tickets_status_priority ON tickets(status, priority);

-- ========== TICKET CC ==========
CREATE TABLE IF NOT EXISTS ticket_cc (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ticket_id TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(ticket_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_ticket_cc_ticket_id ON ticket_cc(ticket_id);
CREATE INDEX IF NOT EXISTS idx_ticket_cc_user_id ON ticket_cc(user_id);

-- ========== ACTIVITIES TABLE ==========
CREATE TABLE IF NOT EXISTS activities (
  id TEXT PRIMARY KEY,
  ticket_id TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('comment', 'internal_note', 'status_change', 'assignment', 'priority_change', 'system')),
  content TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  is_internal INTEGER NOT NULL DEFAULT 0 CHECK(is_internal IN (0, 1)),
  parent_activity_id TEXT,
  is_reply INTEGER DEFAULT 0,
  is_edited INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  metadata TEXT,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES users(id),
  FOREIGN KEY (parent_activity_id) REFERENCES activities(id)
);

CREATE INDEX IF NOT EXISTS idx_activities_ticket ON activities(ticket_id);
CREATE INDEX IF NOT EXISTS idx_activities_created_at ON activities(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activities_author ON activities(author_id);
CREATE INDEX IF NOT EXISTS idx_activities_type ON activities(type);
CREATE INDEX IF NOT EXISTS idx_activities_ticket_created ON activities(ticket_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activities_parent ON activities(parent_activity_id);

-- ========== ATTACHMENTS TABLE ==========
CREATE TABLE IF NOT EXISTS attachments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ticket_id TEXT NOT NULL,
  activity_id TEXT,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_type TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  uploaded_by INTEGER NOT NULL,
  uploaded_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_attachments_ticket ON attachments(ticket_id);
CREATE INDEX IF NOT EXISTS idx_attachments_activity ON attachments(activity_id);

-- ========== SLA RULES TABLE ==========
CREATE TABLE IF NOT EXISTS sla_rules (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  enabled INTEGER DEFAULT 1,
  priority_conditions TEXT,
  category_conditions TEXT,
  department_conditions TEXT,
  custom_field_conditions TEXT,
  first_response_minutes INTEGER NOT NULL,
  resolution_minutes INTEGER NOT NULL,
  escalation_enabled INTEGER DEFAULT 0,
  escalation_after_minutes INTEGER,
  escalation_new_priority TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_sla_rules_enabled ON sla_rules(enabled);
CREATE INDEX IF NOT EXISTS idx_sla_rules_created ON sla_rules(created_at);
CREATE INDEX IF NOT EXISTS idx_sla_rules_display_order ON sla_rules(display_order);

-- ========== KNOWLEDGE BASE ==========
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL DEFAULT 'FileText',
  color TEXT NOT NULL DEFAULT 'text-blue-500',
  sort_order INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('draft', 'published')) DEFAULT 'draft',
  views INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  not_helpful_count INTEGER DEFAULT 0,
  created_by INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  deleted_at TEXT,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_created_by ON articles(created_by);

CREATE TABLE IF NOT EXISTS article_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  tag_name TEXT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_article_tags_article ON article_tags(article_id);
CREATE INDEX IF NOT EXISTS idx_article_tags_name ON article_tags(tag_name);

CREATE TABLE IF NOT EXISTS article_attachments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_type TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  uploaded_by INTEGER NOT NULL,
  uploaded_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_article_attachments_article ON article_attachments(article_id);

CREATE TABLE IF NOT EXISTS article_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  is_helpful INTEGER NOT NULL CHECK(is_helpful IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(article_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_article_feedback_article ON article_feedback(article_id);

CREATE TABLE IF NOT EXISTS article_suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  ticket_category TEXT NOT NULL,
  relevance_score INTEGER DEFAULT 0,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  UNIQUE(article_id, ticket_category)
);

CREATE INDEX IF NOT EXISTS idx_article_suggestions_category ON article_suggestions(ticket_category);

-- ========== NOTIFICATIONS TABLE ==========
CREATE TABLE IF NOT EXISTS notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  link TEXT,
  read INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON notifications(created_at DESC);

-- ========== SYSTEM SETTINGS TABLE ==========
CREATE TABLE IF NOT EXISTS system_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  allow_public_signup INTEGER DEFAULT 1,
  default_assignment TEXT DEFAULT 'manual',
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
  branding_logo_url TEXT,
  branding_primary_color TEXT DEFAULT '#3b82f6',
  branding_company_name TEXT,
  form_configuration TEXT DEFAULT '{}',
  updated_at TEXT DEFAULT (datetime('now')),
  updated_by INTEGER,
  FOREIGN KEY (updated_by) REFERENCES users(id)
);

-- Insert default settings
INSERT INTO system_settings (
  allow_public_signup,
  default_assignment,
  enable_knowledge_base,
  email_from_name,
  enable_email_notifications,
  password_min_length,
  force_password_change_first_login,
  session_timeout_minutes,
  max_login_attempts,
  lockout_duration_minutes,
  permission_matrix
) VALUES (
  1,
  'manual',
  1,
  'ITSM Support',
  1,
  6,
  0,
  480,
  5,
  15,
  '{
    "ticket:create": ["user", "agent", "manager", "admin"],
    "ticket:view:own": ["user", "agent", "manager", "admin"],
    "ticket:view:all": ["agent", "manager", "admin"],
    "ticket:edit": ["agent", "manager", "admin"],
    "ticket:delete": ["admin"],
    "ticket:assign": ["manager", "admin"],
    "ticket:close": ["manager", "admin"],
    "ticket:resolve": ["agent", "manager", "admin"],
    "user:view": ["agent", "manager", "admin"],
    "user:create": ["admin"],
    "user:edit": ["manager", "admin"],
    "user:delete": ["admin"],
    "settings:view": ["manager", "admin"],
    "settings:edit": ["admin"],
    "customize:view": ["manager", "admin"],
    "customize:edit": ["admin"],
    "reports:view": ["agent", "manager", "admin"],
    "reports:export": ["manager", "admin"],
    "kb:view": ["user", "agent", "manager", "admin"],
    "kb:create": ["agent", "manager", "admin"],
    "kb:edit": ["agent", "manager", "admin"],
    "kb:delete": ["manager", "admin"],
    "dashboard:view": ["agent", "manager", "admin"]
  }'
);
