import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Plus, Minus } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

export default function Pricing() {
  const [teamSize, setTeamSize] = useState(10);

  // Get the optimal Forge ITSM plan based on team size
  const getOptimalForgeITSMPlan = (agents: number) => {
    if (agents <= 3) {
      return {
        name: "Starter",
        monthly: 59.99,
        yearly: 719.88,
        perAgent: (59.99 / agents).toFixed(2),
        agentLimit: "up to 3 agents"
      };
    }
    if (agents <= 5) {
      return {
        name: "Professional",
        monthly: 79.99,
        yearly: 959.88,
        perAgent: (79.99 / agents).toFixed(2),
        agentLimit: "up to 5 agents"
      };
    }
    // Business plan: $119.99 + ($9.99 × extra agents)
    const extraAgents = agents - 10;
    const monthly = 119.99 + (extraAgents * 9.99);
    const yearly = monthly * 12;
    return {
      name: "Business",
      monthly: monthly,
      yearly: yearly,
      perAgent: (monthly / agents).toFixed(2),
      agentLimit: `${agents} agents`
    };
  };

  // Calculate savings vs competitors
  const calculateSavings = (competitorPricePerAgent: number) => {
    const competitorYearly = competitorPricePerAgent * teamSize * 12;
    const forgeYearly = getOptimalForgeITSMPlan(teamSize).yearly;
    const savings = competitorYearly - forgeYearly;
    const percentSavings = ((savings / competitorYearly) * 100).toFixed(0);

    return {
      competitorYearly,
      savings: Math.round(savings),
      percentSavings
    };
  };

  const forgePlan = getOptimalForgeITSMPlan(teamSize);

  // Competitor data
  const competitors = [
    { name: "Zendesk Suite – Professional", pricePerAgent: 115, ref: "1", url: "https://www.zendesk.com/pricing/" },
    { name: "Freshdesk – Pro", pricePerAgent: 49, ref: "2", url: "https://www.freshworks.com/freshdesk/pricing/" },
    { name: "Jira Service Management – Standard", pricePerAgent: 20, ref: "3", url: "https://www.atlassian.com/software/jira/service-management/pricing" },
    { name: "Zoho Desk – Professional", pricePerAgent: 23, ref: "4", url: "https://www.zoho.com/desk/pricing.html" },
    { name: "HelpDesk.com – Team", pricePerAgent: 29, ref: "5", url: "https://www.helpdesk.com/pricing/" }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="ITSM Pricing Comparison: Forge vs Zendesk vs Freshdesk"
        description="Compare ITSM software pricing. Forge ITSM starts at $59.99/mo vs Zendesk $115/agent or Freshdesk $49/agent. Save up to $12,360/year with no per-user fees. See the honest pricing breakdown."
        keywords="ITSM pricing, IT ticketing software cost, Zendesk pricing comparison, Freshdesk pricing, affordable help desk software, ITSM cost calculator, service desk pricing"
        canonical="https://forge-itsm.com/pricing"
      />
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
                <div className="text-xs text-muted-foreground mt-1">+ sales tax</div>
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
                <div className="text-xs text-muted-foreground mt-1">+ sales tax</div>
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
                <div className="text-xs text-muted-foreground mt-1">+ sales tax</div>
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

            {/* Team Size Selector */}
            <div className="mb-8 p-6 rounded-xl glass-card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2">
                    How many agents are on your team?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Adjust to see pricing for your exact team size
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTeamSize(prev => Math.max(3, prev - 1))}
                    disabled={teamSize === 3}
                    className="p-3 rounded-lg border border-primary/30 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Decrease team size"
                  >
                    <Minus className="h-5 w-5" />
                  </button>

                  <div className="text-center min-w-[100px]">
                    <div className="text-3xl font-bold text-primary">{teamSize}</div>
                    <div className="text-sm text-muted-foreground">agents</div>
                  </div>

                  <button
                    onClick={() => setTeamSize(prev => Math.min(50, prev + 1))}
                    disabled={teamSize === 50}
                    className="p-3 rounded-lg border border-primary/30 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Increase team size"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="3"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 agents</span>
                  <span>50 agents</span>
                </div>
              </div>

              <div className="mt-4 text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm">
                  <strong className="text-primary">Your plan: Forge ITSM {forgePlan.name}</strong>
                  <span className="text-muted-foreground"> — {forgePlan.agentLimit}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ${forgePlan.yearly.toLocaleString()}/year + applicable sales tax
                </p>
              </div>
            </div>

            {/* Simplified 3-Column Pricing Comparison */}
            <div className="overflow-x-auto rounded-xl glass-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="p-4 text-left font-semibold">Vendor</th>
                    <th className="p-4 text-center font-semibold">Annual Cost</th>
                    <th className="p-4 text-center font-semibold">vs Forge ITSM</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Forge ITSM Row */}
                  <tr className="border-b-2 border-primary/30 bg-primary/10">
                    <td className="p-4">
                      <div className="font-bold text-lg">
                        🎯 Forge ITSM – {forgePlan.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        ${forgePlan.perAgent}/agent/mo · {forgePlan.agentLimit}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        ${forgePlan.yearly.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">per year + tax</div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      —
                    </td>
                  </tr>

                  {/* Competitor Rows */}
                  {competitors.map((competitor) => {
                    const savings = calculateSavings(competitor.pricePerAgent);
                    return (
                      <tr key={competitor.name} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold">
                            {competitor.name}<sup className="text-primary">{competitor.ref}</sup>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            ${competitor.pricePerAgent}/agent/mo
                          </div>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          <div className="text-lg">
                            ${savings.competitorYearly.toLocaleString()}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="inline-flex flex-col items-center gap-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                              <span className="text-green-700 dark:text-green-300 font-semibold text-sm">
                                💸 Save ${savings.savings.toLocaleString()}
                              </span>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                              {savings.percentSavings}% less
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Tax Information */}
            <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold mb-1">
                    Sales Tax Information
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Prices shown are before tax. Sales tax will be calculated automatically at checkout based on your location and applicable rates. Tax rates vary by state and country.
                  </p>
                </div>
              </div>
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
                  <sup className="text-primary">1</sup> Zendesk Suite Professional: <a href="https://www.zendesk.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zendesk Official Pricing</a> ($115/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">2</sup> Freshdesk Pro: <a href="https://www.freshworks.com/freshdesk/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Freshworks Official Pricing</a> ($49/agent/mo, billed annually)
                </li>
                <li>
                  <sup className="text-primary">3</sup> Jira Service Management Standard: <a href="https://www.atlassian.com/software/jira/service-management/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Atlassian Service Management Pricing</a> ($20/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">4</sup> Zoho Desk Professional: <a href="https://www.zoho.com/desk/pricing.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zoho Desk Pricing & Editions</a> ($23/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">5</sup> HelpDesk.com Team: <a href="https://www.helpdesk.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">HelpDesk Official Pricing</a> ($29/user/mo, billed annually)
                </li>
              </ol>
              <p className="text-xs text-muted-foreground mt-4 italic">
                * Forge ITSM uses flat-rate pricing (one price per team, not per agent). Per-agent prices shown for comparison purposes only.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do prices include sales tax?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, prices shown are before tax. Sales tax is calculated automatically at checkout based on your billing location. We use Stripe Tax to ensure accurate tax rates for your state or country. You'll see the exact tax amount before completing your purchase.
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
