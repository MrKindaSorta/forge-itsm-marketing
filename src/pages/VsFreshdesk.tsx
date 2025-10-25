import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, ArrowRight, Shield, Sparkles, Clock } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export default function VsFreshdesk() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://forge-itsm.com' },
    { name: 'Comparisons', url: 'https://forge-itsm.com' },
    { name: 'vs Freshdesk', url: 'https://forge-itsm.com/vs-freshdesk' }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Forge ITSM vs Freshdesk: Better Features, Better Price"
        description="Compare Forge ITSM vs Freshdesk. Get SLA management, automation, and all features on every plan. Freshdesk locks features behind expensive tiers. See the honest comparison."
        keywords="Freshdesk alternative, Forge ITSM vs Freshdesk, Freshdesk comparison, Freshdesk pricing, better than Freshdesk, affordable ITSM, Freshdesk alternative for small teams"
        canonical="https://forge-itsm.com/vs-freshdesk"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-mesh-gradient">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Forge ITSM vs <span className="text-primary">Freshdesk</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              All features included. No tier games. No "upgrade to unlock" BS.
            </p>
            <div className="inline-block px-6 py-3 rounded-lg bg-primary/10 border-2 border-primary/20">
              <p className="text-primary font-bold text-lg">
                ⚡ Get SLA management and automation on ALL plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Freshdesk */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Problem with Freshdesk
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Freshdesk looks affordable at first, but they lock essential features behind expensive tiers. Want SLA management? Upgrade. Want automation? Upgrade. Want reports? Upgrade.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Freshdesk Free/Growth */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold">Freshdesk Growth</div>
                      <div className="text-4xl font-bold mt-2">$18</div>
                      <div className="text-muted-foreground">/agent/month</div>
                    </div>
                    <div className="pt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Basic ticket management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0" />
                        <span>No SLA management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0" />
                        <span>No automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0" />
                        <span>Limited reports</span>
                      </div>
                    </div>
                    <div className="pt-4 text-sm text-muted-foreground italic">
                      "You'll need to upgrade for real ITSM features"
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Freshdesk Pro */}
              <Card className="glass-card border-destructive/50">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold">Freshdesk Pro</div>
                      <div className="text-sm text-muted-foreground mb-2">(What you actually need)</div>
                      <div className="text-4xl font-bold mt-2">$59</div>
                      <div className="text-muted-foreground">/agent/month</div>
                    </div>
                    <div className="pt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Full ticket management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>SLA management included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Automation included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Advanced reports</span>
                      </div>
                    </div>
                    <div className="pt-4 text-sm font-semibold text-destructive">
                      10 agents = $590/month = $7,080/year
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Forge ITSM Solution */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Forge ITSM: All Features, Every Plan
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="glass-card border-2 border-primary shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="text-xl font-bold text-primary">Starter</div>
                    <div className="text-4xl font-bold mt-2">$59.99</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                    <div className="text-xs text-muted-foreground mt-1">Up to 3 agents</div>
                  </div>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>SLA Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Full Reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Knowledge Base</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Custom Fields</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-2 border-primary shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="text-xl font-bold text-primary">Professional</div>
                    <div className="text-4xl font-bold mt-2">$79.99</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                    <div className="text-xs text-muted-foreground mt-1">Up to 5 agents</div>
                  </div>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Everything in Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Same full features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>No upgrades needed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-2 border-primary shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="text-xl font-bold text-primary">Business</div>
                    <div className="text-4xl font-bold mt-2">$119.99</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                    <div className="text-xs text-muted-foreground mt-1">Up to 10 agents</div>
                  </div>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Everything included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>$9.99 per extra agent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Scale as you grow</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="p-8 glass-card rounded-xl text-center">
              <div className="text-2xl font-bold mb-4">Cost for 10-Agent Team</div>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Forge ITSM Business</div>
                  <div className="text-4xl font-bold text-primary">$119.99/mo</div>
                  <div className="text-2xl font-bold text-primary mt-2">$1,440/year</div>
                  <div className="text-sm text-green-600 dark:text-green-400 mt-2">All features included</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Freshdesk Pro</div>
                  <div className="text-4xl font-bold text-destructive">$590/mo</div>
                  <div className="text-2xl font-bold text-destructive mt-2">$7,080/year</div>
                  <div className="text-sm text-muted-foreground mt-2">For same features</div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                <div className="text-xl font-bold text-green-800 dark:text-green-200">
                  Save $5,640 per year with Forge ITSM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Detailed Feature Comparison
            </h2>

            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4 text-center">
                      <div className="font-bold text-primary">Forge ITSM</div>
                      <div className="text-sm font-normal text-muted-foreground">$59.99</div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-bold">Freshdesk Growth</div>
                      <div className="text-sm font-normal text-muted-foreground">$18/agent</div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-bold">Freshdesk Pro</div>
                      <div className="text-sm font-normal text-muted-foreground">$59/agent</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Ticket Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold">SLA Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold">Automation & Workflows</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Knowledge Base</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Custom Fields</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold">Advanced Reports</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Real-Time Notifications</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Multi-Channel Support</td>
                    <td className="p-4 text-center bg-primary/5"><span className="text-sm text-muted-foreground">Email + Portal</span></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Teams Choose Forge ITSM Over Freshdesk
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">No Feature Gatekeeping</h3>
                  <p className="text-muted-foreground">
                    Get SLA management and automation from day one. No "Pro" tier needed for basic ITSM features.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Faster to Deploy</h3>
                  <p className="text-muted-foreground">
                    Freshdesk has a steep learning curve. Forge ITSM is intuitive and ready in minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Honest Pricing</h3>
                  <p className="text-muted-foreground">
                    No surprise upgrades. What you see is what you get. All features, every plan.
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
            Get All Features Without the Upgrade Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try Forge ITSM free for 30 days. No credit card required.
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
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
