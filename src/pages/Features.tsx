import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Ticket, Users, Clock, FileText, Settings,
  BarChart3, Bell, Shield, CheckCircle2,
  ArrowRight, MessageSquare, Tags, Paperclip, Palette
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { signupTracker } from '@/lib/signupTracker';

export default function Features() {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="IT Ticketing System Features | Free Help Desk Software - Forge ITSM"
        description="Free ITSM software with all features included: ticket management, SLA tracking, knowledge base, real-time notifications, custom fields, automation, and reports. No add-ons required."
        keywords="it ticketing software, free help desk software, ITSM features, SLA management, help desk features, knowledge base software, ticket automation, IT service desk, ticket management system"
        canonical="https://forge-itsm.com/features"
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple Help Desk Software with Everything You Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Easy ticketing system built for small and medium-sized IT teams. All features included, no add-ons required.
          </p>
          <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Features - Hero CTA')}>
            <Button size="xl" className="gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy Ticketing System – Simple Yet Powerful</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable help desk with all the features you need, without the complexity you don't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ticket Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create, assign, track, and resolve tickets with ease. Inline edits for status/priority from list view—instant saves. Multiple views, filters, and bulk actions to handle tickets efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SLA Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Define response and resolution time targets by priority. Visual SLA indicators keep your team on track.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage users with role-based permissions: Users, Agents, Managers, and Admins. Organize by departments and teams.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build a searchable knowledge base with articles organized by category. Reduce tickets with self-service resources.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add custom fields to tickets with multiple types: text, dropdown, date picker, checkbox, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Paperclip className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>File Attachments & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload screenshots, logs, and documents to tickets. Secure cloud storage via Cloudflare R2 with automatic organization.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track performance with detailed reports. Monitor ticket trends, agent productivity, and SLA compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-time Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay informed with instant notifications for assignments, updates, mentions, and SLA warnings.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Role-Based Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Granular permission controls for users, agents, managers, and admins. Configure access to tickets, settings, reports, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Internal Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Communicate internally on tickets without users seeing. Perfect for team coordination and documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Tags className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Categories & Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organize tickets with custom categories and tags. Filter and report on the issues that matter most.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on Cloudflare's global network. Role-based access control, secure authentication, and GDPR-compliant with 30-day point-in-time backups. Not HIPAA-ready—avoid PHI (see terms).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ticket Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Ticket Workflow</h2>
              <p className="text-lg text-muted-foreground">
                From submission to resolution in a streamlined process
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Submit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Users create tickets via web portal</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Assign</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Managers assign to agents or teams</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-2">
                    <Settings className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Agents troubleshoot and resolve issues</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Resolve</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Mark tickets as resolved when fixed</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">Close</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Managers close after confirmation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Portal vs Agent Backend */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Interfaces, One System</h2>
              <p className="text-lg text-muted-foreground">
                Separate experiences optimized for end users and IT staff
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">User Portal</CardTitle>
                  <p className="text-muted-foreground">Clean, simple interface for end users</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Submit Tickets</div>
                      <div className="text-sm text-muted-foreground">Easy form with guided fields</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Track Progress</div>
                      <div className="text-sm text-muted-foreground">View status and updates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Browse Knowledge Base</div>
                      <div className="text-sm text-muted-foreground">Self-service help articles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Manage Profile</div>
                      <div className="text-sm text-muted-foreground">Update contact info and preferences</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Mobile-Responsive</div>
                      <div className="text-sm text-muted-foreground">On-the-go ticket submissions from any device</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Agent Backend</CardTitle>
                  <p className="text-muted-foreground">Powerful workspace for IT professionals</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Full Ticket Management</div>
                      <div className="text-sm text-muted-foreground">Assign, prioritize, and resolve</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Dashboard & Metrics</div>
                      <div className="text-sm text-muted-foreground">Real-time performance insights</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">User & Asset Management</div>
                      <div className="text-sm text-muted-foreground">Centralized IT administration</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Reports & Customization</div>
                      <div className="text-sm text-muted-foreground">Configure and analyze your system</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Smart Search</div>
                      <div className="text-sm text-muted-foreground">Sticky filters and saved views (e.g., 'High-priority open')</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Hub */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built to Fit Your Workflow</h2>
              <p className="text-lg text-muted-foreground">
                Customize the system without writing code
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Form Builder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Drag-and-drop ticket portal builder—no code. Add custom fields, reorder sections, and make fields required or optional.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>SLA Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Define custom SLA targets based on priority and category. Set different response and resolution times for different ticket types.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Branding & White-Label</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Customize your help desk with your logo, colors, and company name. Make the platform match your brand identity.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Tags className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Categories & Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Manage ticket categories, priorities, and customize the look and feel to match your organization's brand.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Custom categories and subcategories
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Upload your logo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Brand colors and themes
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience It Yourself?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Try all features free forever. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Features - Bottom CTA')}>
              <Button size="xl" variant="secondary" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
