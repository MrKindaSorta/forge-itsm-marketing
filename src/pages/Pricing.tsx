import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No per-user charges for end users. Just straightforward pricing that scales with your team.
          </p>
          <div className="inline-block px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-green-800 dark:text-green-200 font-semibold">
              💰 Save up to $12,360 per year compared to leading competitors
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="relative glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>Perfect for small IT teams</CardDescription>
              <div className="pt-4">
                <div className="text-4xl font-bold">$59.99</div>
                <div className="text-sm text-muted-foreground">/month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Up to 3 Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited End Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>SLA Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Knowledge Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Custom Fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Reports & Analytics</span>
                </div>
              </div>
              <Link to="/signup" className="block">
                <Button className="w-full mt-6 shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="relative glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For growing IT departments</CardDescription>
              <div className="pt-4">
                <div className="text-4xl font-bold">$79.99</div>
                <div className="text-sm text-muted-foreground">/month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Up to 5 Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited End Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>SLA Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Knowledge Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Custom Fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Reports & Analytics</span>
                </div>
              </div>
              <Link to="/signup" className="block">
                <Button className="w-full mt-6 shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Business Plan */}
          <Card className="relative glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Business</CardTitle>
              <CardDescription>For established IT teams</CardDescription>
              <div className="pt-4">
                <div className="text-4xl font-bold">$119.99</div>
                <div className="text-sm text-muted-foreground">/month + $9.99/additional agent</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Up to 10 Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited End Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>SLA Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Knowledge Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Custom Fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Reports & Analytics</span>
                </div>
              </div>
              <Link to="/signup" className="block">
                <Button className="w-full mt-6 shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            All plans include a <span className="font-semibold text-foreground">30-day free trial</span>. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
              <p className="text-lg text-muted-foreground">
                See how much you'll save compared to other ticketing systems
              </p>
            </div>

            {/* Comprehensive Pricing Comparison */}
            <div className="overflow-x-auto rounded-xl glass-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="p-3 text-left font-semibold">Vendor (Plan)</th>
                    <th className="p-3 text-right font-semibold whitespace-nowrap">Per-Agent /mo</th>
                    <th className="p-3 text-right font-semibold whitespace-nowrap">3 Agents/yr</th>
                    <th className="p-3 text-right font-semibold whitespace-nowrap">5 Agents/yr</th>
                    <th className="p-3 text-right font-semibold whitespace-nowrap">10 Agents/yr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 bg-primary/10">
                    <td className="p-3 font-semibold">Forge ITSM – Professional</td>
                    <td className="p-3 text-right font-bold text-primary">$16.00</td>
                    <td className="p-3 text-right font-bold text-primary">$719.88</td>
                    <td className="p-3 text-right font-bold text-primary">$959.88</td>
                    <td className="p-3 text-right font-bold text-primary">$1,439.88</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="p-3">Zendesk Suite – Professional<sup className="text-primary">1</sup></td>
                    <td className="p-3 text-right text-muted-foreground">$115</td>
                    <td className="p-3 text-right text-muted-foreground">$4,140</td>
                    <td className="p-3 text-right text-muted-foreground">$6,900</td>
                    <td className="p-3 text-right text-muted-foreground">$13,800</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="p-3">Freshdesk – Pro<sup className="text-primary">2</sup></td>
                    <td className="p-3 text-right text-muted-foreground">$49</td>
                    <td className="p-3 text-right text-muted-foreground">$1,764</td>
                    <td className="p-3 text-right text-muted-foreground">$2,940</td>
                    <td className="p-3 text-right text-muted-foreground">$5,880</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="p-3">Jira Service Management – Standard<sup className="text-primary">3</sup></td>
                    <td className="p-3 text-right text-muted-foreground">$20</td>
                    <td className="p-3 text-right text-muted-foreground">$720</td>
                    <td className="p-3 text-right text-muted-foreground">$1,200</td>
                    <td className="p-3 text-right text-muted-foreground">$2,400</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="p-3">Zoho Desk – Professional<sup className="text-primary">4</sup></td>
                    <td className="p-3 text-right text-muted-foreground">$23</td>
                    <td className="p-3 text-right text-muted-foreground">$828</td>
                    <td className="p-3 text-right text-muted-foreground">$1,380</td>
                    <td className="p-3 text-right text-muted-foreground">$2,760</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-3">HelpDesk.com – Team<sup className="text-primary">5</sup></td>
                    <td className="p-3 text-right text-muted-foreground">$29</td>
                    <td className="p-3 text-right text-muted-foreground">$1,044</td>
                    <td className="p-3 text-right text-muted-foreground">$1,740</td>
                    <td className="p-3 text-right text-muted-foreground">$3,480</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-muted-foreground text-center mt-6">
              Competitor prices based on publicly available pricing as of January 2025. Prices may vary based on region, features selected, and promotional offers. Please verify current pricing on vendor websites.
            </p>

            {/* Source Citations */}
            <div className="mt-8 p-6 rounded-lg bg-background/50 border border-border/30">
              <h3 className="font-semibold mb-3 text-sm">Sources:</h3>
              <ol className="text-xs space-y-2 text-muted-foreground">
                <li>
                  <sup className="text-primary">1</sup> Zendesk Suite Professional: <a href="https://support.zendesk.com/hc/en-us/articles/5555300573850-Zendesk-s-2023-Pricing-Update-What-You-Need-To-Know" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zendesk Support - 2023 Pricing Update</a>
                </li>
                <li>
                  <sup className="text-primary">2</sup> Freshdesk Pro: <a href="https://www.freshworks.com/freshdesk/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Freshworks Official Pricing</a> ($49/agent/mo, billed annually)
                </li>
                <li>
                  <sup className="text-primary">3</sup> Jira Service Management Standard: <a href="https://www.atlassian.com/collections/service/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Atlassian Service Collection Pricing</a>
                </li>
                <li>
                  <sup className="text-primary">4</sup> Zoho Desk Professional: <a href="https://www.zoho.com/desk/pricing.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zoho Desk Pricing & Editions</a>
                </li>
                <li>
                  <sup className="text-primary">5</sup> HelpDesk.com Team: <a href="https://www.helpdesk.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">HelpDesk Official Pricing</a> ($29/user/mo, billed annually)
                </li>
              </ol>
              <p className="text-xs text-muted-foreground mt-4 italic">
                All competitor pricing information is sourced from publicly available vendor websites. Forge ITSM is not affiliated with any competitors listed. Prices are subject to change by the respective vendors.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What counts as an agent?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Agents are IT staff who work on and resolve tickets. End users who submit tickets don't count toward your agent limit - you can have unlimited end users at no extra cost.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processor.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a contract or can I cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No contract required. You can cancel anytime and you'll retain access until the end of your current billing period. No cancellation fees, ever.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What happens to my data if I cancel?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can export all your data before canceling. We retain your data for 30 days after cancellation in case you want to reactivate, then it's permanently deleted.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer annual billing discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not yet, but we're planning to offer annual billing with a discount in the near future. Sign up to stay informed!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to save money?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button size="xl" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
