import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, ArrowRight, DollarSign, Zap, Users } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { signupTracker } from '@/lib/signupTracker';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { PLANS, COMPETITORS, formatPrice } from '@/config/pricing';

export default function VsZendesk() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://forge-itsm.com' },
    { name: 'Comparisons', url: 'https://forge-itsm.com' },
    { name: 'vs Zendesk', url: 'https://forge-itsm.com/vs-zendesk' }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Forge ITSM vs Zendesk: Save $12,360/Year with Better ITSM Software"
        description={`Detailed comparison: Forge ITSM vs Zendesk. Get all the same features for ${formatPrice(PLANS.starter.monthlyPrice)}/mo vs Zendesk's ${formatPrice(COMPETITORS.zendesk.pricePerAgent, false)}/agent. No per-user fees, no feature gatekeeping. See why IT teams are switching.`}
        keywords="Zendesk alternative, Forge ITSM vs Zendesk, Zendesk comparison, Zendesk pricing, cheaper than Zendesk, best Zendesk alternative, ITSM alternative to Zendesk"
        canonical="https://forge-itsm.com/vs-zendesk"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-mesh-gradient">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Forge ITSM vs <span className="text-primary">Zendesk</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Same enterprise features. Way better price. No per-user fees.
            </p>
            <div className="inline-block px-6 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 font-bold text-lg">
                💰 Save $12,360 per year with a 10-person team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pricing Comparison
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Forge ITSM */}
              <Card className="glass-card border-2 border-primary shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-primary">Forge ITSM</div>
                    <div className="text-5xl font-bold">$59.99</div>
                    <div className="text-muted-foreground">/month flat fee</div>
                    <div className="text-sm text-muted-foreground">Up to 3 agents included</div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Unlimited end-users (free)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>All features included</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>30-day free trial</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zendesk */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold">Zendesk Suite</div>
                    <div className="text-5xl font-bold">$115</div>
                    <div className="text-muted-foreground">/agent/month</div>
                    <div className="text-sm text-red-600 dark:text-red-400 font-semibold">
                      + $19/end-user/month
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <X className="h-4 w-4 text-destructive" />
                        <span>Charged per end-user</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <X className="h-4 w-4 text-destructive" />
                        <span>Complex pricing tiers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>14-day free trial</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Real Cost Example */}
            <div className="mt-12 p-8 glass-card rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Real-World Cost for a 10-Person IT Team</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="font-bold text-lg text-primary">Forge ITSM</div>
                  <div className="text-sm space-y-1">
                    <div>Professional Plan: $79.99/mo</div>
                    <div className="text-muted-foreground">(covers 5 agents)</div>
                    <div>5 extra agents: $49.95/mo</div>
                    <div className="text-muted-foreground">($9.99 each)</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold">$129.94/month</div>
                    <div className="text-3xl font-bold text-primary">$1,559/year</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-bold text-lg">Zendesk Suite Professional</div>
                  <div className="text-sm space-y-1">
                    <div>10 agents × $115/mo = $1,150/mo</div>
                    <div className="text-muted-foreground">(minimum cost)</div>
                    <div className="text-red-600 dark:text-red-400">+ End-user fees (variable)</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold">$1,150+/month</div>
                    <div className="text-3xl font-bold text-destructive">$13,800+/year</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800 text-center">
                <div className="text-xl font-bold text-green-800 dark:text-green-200">
                  Annual Savings: $12,241+ per year
                </div>
                <div className="text-sm text-green-700 dark:text-green-300 mt-2">
                  That's enough to hire another team member
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4 text-center">
                      <div className="font-bold text-primary">Forge ITSM</div>
                      <div className="text-sm font-normal text-muted-foreground">All Plans</div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-bold">Zendesk</div>
                      <div className="text-sm font-normal text-muted-foreground">Suite Professional</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Ticket Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">SLA Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Knowledge Base</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Automation & Workflows</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Custom Fields</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Reports & Analytics</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Real-Time Notifications</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">File Attachments</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">Mobile App</td>
                    <td className="p-4 text-center bg-primary/5"><span className="text-sm text-muted-foreground">Coming Soon</span></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b-2 border-border/40 bg-muted/50">
                    <td className="p-4 font-bold">Unlimited End-Users</td>
                    <td className="p-4 text-center bg-primary/5">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">Free</div>
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-6 w-6 text-destructive mx-auto" />
                      <div className="text-xs text-red-600 dark:text-red-400 font-semibold mt-1">$19/user</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Switch */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why IT Teams Switch from Zendesk
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Predictable Costs</h3>
                  <p className="text-muted-foreground">
                    No more surprise bills when your company grows. Flat monthly fee means you can actually budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Faster Setup</h3>
                  <p className="text-muted-foreground">
                    Zendesk takes weeks to configure properly. Forge ITSM is ready in 5 minutes. Seriously.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Simpler Interface</h3>
                  <p className="text-muted-foreground">
                    Zendesk has too many features you'll never use. We give you what you need, nothing more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-mesh-gradient py-20 md:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Save $12k+ Per Year?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join IT teams who switched from Zendesk to Forge ITSM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('VS Zendesk - CTA')}>
              <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-xl">
                Start 30-Day Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                View Detailed Pricing
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
