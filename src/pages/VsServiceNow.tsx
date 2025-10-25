import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, ArrowRight, TrendingDown, Zap, Users2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export default function VsServiceNow() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://forge-itsm.com' },
    { name: 'Comparisons', url: 'https://forge-itsm.com' },
    { name: 'vs ServiceNow', url: 'https://forge-itsm.com/vs-servicenow' }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Affordable ServiceNow Alternative for Small IT Teams | Forge ITSM"
        description="ServiceNow costs $100+/user/month and requires consultants to set up. Forge ITSM gives you the same core ITSM features for $59.99/mo flat fee. Perfect for teams under 50 people."
        keywords="ServiceNow alternative, affordable ITSM, ServiceNow for small business, cheap ServiceNow alternative, ITSM for small teams, ServiceNow pricing alternative"
        canonical="https://forge-itsm.com/vs-servicenow"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh-gradient">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              ServiceNow Alternative for <span className="text-primary">Small Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              ServiceNow is built for Fortune 500 companies. You need something that actually fits your team.
            </p>
            <div className="inline-block px-6 py-3 rounded-lg bg-primary/10 border-2 border-primary/20">
              <p className="text-primary font-bold text-lg">
                💡 Same core features. 95% less complexity. 90% lower cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality of ServiceNow */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Reality of ServiceNow for Small Teams
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              ServiceNow is an enterprise platform designed for organizations with 1,000+ employees and dedicated ITSM teams. For teams under 50 people, it's massive overkill.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card border-destructive/50">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <div className="text-2xl font-bold mb-4">ServiceNow IT Service Management</div>
                    <div className="text-4xl font-bold">$100+</div>
                    <div className="text-muted-foreground">/user/month (estimated)</div>
                    <div className="text-sm text-destructive mt-2">*Pricing not publicly listed</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Requires weeks/months of implementation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Needs dedicated admin or consultants ($150-300/hr)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Complex configuration for basic features</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Overwhelming interface with 100s of unused features</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Annual contracts with minimum commitments</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="font-bold text-lg">10-Person Team Cost</div>
                    <div className="text-3xl font-bold text-destructive">$12,000+/year</div>
                    <div className="text-sm text-muted-foreground mt-1">+ implementation costs</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-2 border-primary shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-4">Forge ITSM</div>
                    <div className="text-4xl font-bold">$59.99</div>
                    <div className="text-muted-foreground">/month flat fee</div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-2">Transparent pricing</div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ready to use in 5 minutes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No consultants or admins required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Simple interface, just what you need</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>All ITSM features included from day one</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cancel anytime, no contracts</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="font-bold text-lg">10-Person Team Cost</div>
                    <div className="text-3xl font-bold text-primary">$1,440/year</div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">Everything included</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 glass-card rounded-xl text-center">
              <div className="text-2xl font-bold mb-4">Annual Savings vs ServiceNow</div>
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                $10,560+
              </div>
              <p className="text-muted-foreground">
                That's enough to hire an additional team member or invest in other critical infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Need */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Core ITSM Features You Actually Use
            </h2>

            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4 text-center">
                      <div className="font-bold text-primary">Forge ITSM</div>
                      <div className="text-sm font-normal text-muted-foreground">$59.99/mo</div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-bold">ServiceNow</div>
                      <div className="text-sm font-normal text-muted-foreground">$100+/user</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Incident Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">SLA Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Knowledge Base</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Automation & Workflows</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Reports & Analytics</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Self-Service Portal</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Asset Management</td>
                    <td className="p-4 text-center bg-primary/5"><span className="text-sm text-muted-foreground">Coming Soon</span></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30">
                    <td className="p-4">Change Management (ITIL)</td>
                    <td className="p-4 text-center bg-primary/5"><span className="text-sm text-muted-foreground">Roadmap</span></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b-2 border-border/40 bg-primary/10">
                    <td className="p-4 font-bold">Setup Time</td>
                    <td className="p-4 text-center font-bold">5 minutes</td>
                    <td className="p-4 text-center font-bold">Weeks to months</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="p-4 font-bold">Requires Consultants?</td>
                    <td className="p-4 text-center font-bold text-green-600 dark:text-green-400">No</td>
                    <td className="p-4 text-center font-bold text-red-600 dark:text-red-400">Usually</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose What */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Who Should Use ServiceNow vs Forge ITSM?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">ServiceNow is Great For:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Enterprise companies (500+ employees)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complex ITIL processes and governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Teams with dedicated ServiceNow admins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Heavy customization and integration needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Budget for $50k-$200k+ annual licensing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-2 border-primary">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Forge ITSM is Perfect For:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Small to medium IT teams (3-50 people)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Need core ITSM without enterprise bloat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Want to be live in minutes, not months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Don't need (or want) full ITIL complexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Budget-conscious but need professional tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Forge */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Small Teams Choose Forge ITSM
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">90% Lower Cost</h3>
                  <p className="text-muted-foreground">
                    Get the core ITSM features you need without enterprise pricing. Flat monthly fee, no surprises.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">5-Minute Setup</h3>
                  <p className="text-muted-foreground">
                    No consultants. No training. No months-long implementation. Just sign up and start ticketing.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Users2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Built for Small Teams</h3>
                  <p className="text-muted-foreground">
                    Designed specifically for teams like yours. Simple enough to use, powerful enough to matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-mesh-gradient py-20 md:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Get Enterprise ITSM Features at Small Team Prices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try Forge ITSM free for 30 days. No consultants. No complexity. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-xl">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                See Transparent Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            30-day free trial • No credit card required • No contracts
          </p>
        </div>
      </section>
    </div>
  );
}
