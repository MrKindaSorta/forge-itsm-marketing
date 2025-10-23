import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, DollarSign, Users, Code, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-3 py-1 rounded-full border bg-muted text-sm font-medium mb-4">
            🚀 Enterprise Features. Small Business Pricing.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The IT Ticketing System
            <br />
            <span className="text-primary">You've Been Looking For</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop overpaying for bloated enterprise platforms. Stop settling for feature-lacking free tools.
            Forge ITSM delivers everything you need at a price that makes sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="xl" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="xl" variant="outline">View Pricing</Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why IT Teams Choose Forge ITSM</h2>
            <p className="text-lg text-muted-foreground">
              Built by someone who spent 10+ years in IT and got tired of expensive, complicated platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Starting at $49.99/month for 3 agents. No hidden fees, no per-user gouging for end-users.
                Save thousands compared to Zendesk and Freshdesk.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Features Included</h3>
              <p className="text-muted-foreground">
                SLA tracking, custom fields, automation, reporting, knowledge base, and asset management.
                No tiered feature restrictions.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Built for SMBs</h3>
              <p className="text-muted-foreground">
                Perfect for teams of 10-200 users. Simple enough for small teams, powerful enough as you grow.
                No enterprise bloat.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Tech Stack</h3>
              <p className="text-muted-foreground">
                Built on Cloudflare's edge network. Fast globally, secure by design, zero server maintenance for you.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Role-based permissions, secure authentication, automatic backups. Your data is protected and always available.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Setup</h3>
              <p className="text-muted-foreground">
                Start in minutes, not weeks. Clean interface that doesn't require extensive training or consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Simple, Honest Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Save $2,100-$7,860 per year compared to competitors
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="border rounded-lg p-6 bg-background">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$49.99</div>
                  <div className="text-sm text-muted-foreground mb-4">/month</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Up to 3 Agents</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited Users</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>All Features</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-primary rounded-lg p-6 bg-primary/5 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$69.99</div>
                  <div className="text-sm text-muted-foreground mb-4">/month</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Up to 5 Agents</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited Users</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>All Features</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-background">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Business</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$119.99</div>
                  <div className="text-sm text-muted-foreground mb-4">/month</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Up to 10 Agents</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited Users</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>$9.99/additional agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/pricing">
              <Button size="xl" className="mt-8">View Full Pricing Comparison</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your IT Support?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join IT teams who are saving thousands while getting better tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button size="xl" variant="secondary" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
