import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Zap, Shield, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Simplicity Focused */}
      <section className="relative overflow-hidden bg-mesh-gradient">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-primary/10 border-primary/20 hover:bg-primary/15 transition-colors">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" />
              IT Ticketing That Actually Makes Sense
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              IT Ticketing That
              <br />
              <span className="text-primary bg-clip-text">Just Works</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop fighting with overcomplicated enterprise software.
              <br className="hidden sm:block" />
              Stop settling for feature-lacking free tools.
              <br className="hidden sm:block" />
              Get a ticketing system that's <strong className="text-foreground">actually pleasant to use</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
                  Start 30-Day Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border/60 hover:bg-muted/50 transition-all">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different - Bold & Opinionated */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why We're <span className="text-primary">Different</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              We built this because we were tired of the BS in the industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500/20 to-destructive/20 flex items-center justify-center border border-destructive/20">
                  <X className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">We Don't Nickel-and-Dime You</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zendesk charges per end-user. Freshdesk charges per agent. We don't. Because charging for people using your software is <strong className="text-foreground">insane</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Save $2,100-$7,860/year
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">No Feature Gatekeeping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every plan gets everything. SLA tracking, automation, custom fields, reports, knowledge base. No "upgrade to unlock" <strong className="text-foreground">BS</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  All features, all plans
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">No Enterprise Bloat</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You need a ticketing system, not a PhD in ITIL. Simple interface, powerful features. No consultants required.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Clean & intuitive
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Actually Fast Setup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  5 minutes to go live. Not weeks of implementation. Not months of training. Five. Minutes.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Start in minutes
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Built on Cloudflare</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Runs on Cloudflare's global edge network. Fast everywhere. Secure by design. 99.9% uptime guaranteed.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Enterprise-grade infrastructure
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Built by Someone Who Gets It</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Created by an IT pro with 10+ years in the trenches. We know what sucks about ticketing systems because we've <strong className="text-foreground">lived it</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  For IT teams, by IT teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Show The Competition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-primary">Feature Comparison</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Same features. Way better price. Zero BS.
              </p>
            </div>

            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4">
                      <div className="font-bold text-primary">Forge ITSM</div>
                      <div className="text-sm font-normal text-muted-foreground">$59.99/mo</div>
                    </th>
                    <th className="p-4">
                      <div className="font-bold">Zendesk</div>
                      <div className="text-sm font-normal text-muted-foreground">$115/mo</div>
                    </th>
                    <th className="p-4">
                      <div className="font-bold">Freshdesk</div>
                      <div className="text-sm font-normal text-muted-foreground">$79/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">SLA Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Custom Fields</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Automation</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Knowledge Base</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Unlimited End-Users (Ticket Submitters)</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /><div className="text-xs text-muted-foreground">$19/user</div></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t-2 border-border/40 bg-primary/10">
                    <td className="p-4 font-bold">Your Annual Savings</td>
                    <td className="p-4 text-center font-bold text-foreground">—</td>
                    <td className="p-4 text-center font-bold text-green-500">$660+/year</td>
                    <td className="p-4 text-center font-bold text-green-500">$228/year</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm text-muted-foreground mt-4">
                *Forge ITSM is not currently HIPAA-compliant for PHI storage. While our infrastructure
                (Cloudflare Workers, D1, R2) meets HIPAA technical safeguards including encryption at
                rest and in transit, we do not currently have a Business Associate Agreement (BAA) in
                place. Healthcare organizations should not store Protected Health Information (PHI) in
                tickets until we obtain enterprise-level BAA coverage. Your data remains secure, but
                regulatory compliance for PHI requires the BAA. <a href="/terms" className="underline">See terms</a>.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Full Pricing Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-mesh-gradient py-20 md:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative mx-auto px-4 text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join IT teams who chose simplicity over complexity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                Start 30-Day Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-border/60 hover:bg-muted/50 transition-all"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            30-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
