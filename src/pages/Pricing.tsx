import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Plus, Minus, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { signupTracker } from '@/lib/signupTracker';
import {
  PLANS,
  COMPETITORS,
  FREE_TRIAL_DAYS,
  OVERAGE_FEE,
  COMPETITOR_PRICING_DATE,
  getForgeITSMCost,
  formatPrice
} from '@/config/pricing';
import { motion } from 'framer-motion';
import { AnimatedNumber } from '@/components/AnimatedNumber';

export default function Pricing() {
  const [teamSize, setTeamSize] = useState(5);

  // Get the optimal Forge ITSM plan based on team size
  const getOptimalForgeITSMPlan = (agents: number) => {
    const cost = getForgeITSMCost(agents);
    const plan = PLANS[cost.plan];

    return {
      name: plan.name,
      monthly: cost.monthlyPrice,
      yearly: cost.yearlyPrice,
      perAgent: agents > 0 ? (cost.monthlyPrice / agents).toFixed(2) : '0.00',
      agentLimit: cost.extraAgents > 0 ? `${agents} agents` : `up to ${plan.includedAgents} agents`
    };
  };

  // Calculate savings vs competitors
  const calculateSavingsVsCompetitor = (competitorPricePerAgent: number) => {
    const competitorYearly = competitorPricePerAgent * teamSize * 12;
    const forgeYearly = getOptimalForgeITSMPlan(teamSize).yearly;
    const savings = competitorYearly - forgeYearly;
    const percentSavings = competitorYearly > 0 ? ((savings / competitorYearly) * 100).toFixed(0) : '0';

    return {
      competitorYearly,
      savings: Math.round(savings),
      percentSavings
    };
  };

  const forgePlan = getOptimalForgeITSMPlan(teamSize);

  // Competitor data
  const competitors = [
    { name: `${COMPETITORS.zendesk.name} Suite – ${COMPETITORS.zendesk.planName}`, pricePerAgent: COMPETITORS.zendesk.pricePerAgent, ref: "1", url: "https://www.zendesk.com/pricing/" },
    { name: `${COMPETITORS.freshdesk.name} – ${COMPETITORS.freshdesk.planName}`, pricePerAgent: COMPETITORS.freshdesk.pricePerAgent, ref: "2", url: "https://www.freshworks.com/freshdesk/pricing/" },
    { name: `${COMPETITORS.jira.name} – ${COMPETITORS.jira.planName}`, pricePerAgent: COMPETITORS.jira.pricePerAgent, ref: "3", url: "https://www.atlassian.com/software/jira/service-management/pricing" },
    { name: `${COMPETITORS.zoho.name} – ${COMPETITORS.zoho.planName}`, pricePerAgent: COMPETITORS.zoho.pricePerAgent, ref: "4", url: "https://www.zoho.com/desk/pricing.html" },
    { name: `${COMPETITORS.helpdesk.name} – ${COMPETITORS.helpdesk.planName}`, pricePerAgent: COMPETITORS.helpdesk.pricePerAgent, ref: "5", url: "https://www.helpdesk.com/pricing/" }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title={`Free Help Desk Software - $0 or ${formatPrice(PLANS.paid.monthlyPrice, false)}/mo | ITSM Pricing - Forge ITSM`}
        description={`Free ITSM software for small teams, paid plans from ${formatPrice(PLANS.paid.monthlyPrice)}. Cheap alternative to Zendesk (${formatPrice(COMPETITORS.zendesk.pricePerAgent, false)}/agent) and Freshdesk (${formatPrice(COMPETITORS.freshdesk.pricePerAgent, false)}/agent). Save thousands per year with transparent pricing.`}
        keywords="free itsm software, free help desk software, affordable help desk, cheap alternative to ServiceNow, ITSM pricing, affordable ticketing system, simple ITSM pricing"
        canonical="https://forge-itsm.com/pricing"
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 mb-4">
            <p className="text-green-800 dark:text-green-200 font-semibold flex items-center gap-2 justify-center">
              <Sparkles className="h-4 w-4" />
              Start Free Forever – No Credit Card Required
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free for small teams. Affordable for growing teams. No hidden fees. No per-user charges for end users.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="relative glass-card hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">{PLANS.free.name}</CardTitle>
              <CardDescription>{PLANS.free.description}</CardDescription>
              <div className="pt-4">
                <div className="text-5xl font-bold">$0</div>
                <div className="text-sm text-muted-foreground">/month forever</div>
                <div className="text-xs text-green-600 dark:text-green-400 font-semibold mt-2">
                  ✓ No credit card required
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {PLANS.free.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className={feature.includes('Agent') ? 'font-semibold' : ''}>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/signup?plan=free" className="block" onClick={() => signupTracker.trackButtonClick('Pricing - Free Plan')}>
                <Button variant="outline" className="w-full mt-6 shadow-md hover:shadow-lg transition-shadow border-2">
                  Start Free
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Paid Plan */}
          <Card className="relative glass-card hover:scale-105 transition-transform duration-300 border-2 border-primary shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{PLANS.paid.name}</CardTitle>
              <CardDescription>{PLANS.paid.description}</CardDescription>
              <div className="pt-4">
                <div className="text-5xl font-bold">{formatPrice(PLANS.paid.monthlyPrice)}</div>
                <div className="text-sm text-muted-foreground">/month</div>
                <div className="text-xs text-muted-foreground mt-1">+ ${formatPrice(OVERAGE_FEE)}/additional agent</div>
                <div className="text-xs text-muted-foreground mt-1">+ sales tax</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {PLANS.paid.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className={feature.includes('Agent') || feature.includes('agents') ? 'font-semibold' : ''}>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/signup?plan=paid" className="block" onClick={() => signupTracker.trackButtonClick('Pricing - Paid Plan')}>
                <Button className="w-full mt-6 shadow-md hover:shadow-lg transition-shadow">
                  Start Free 30-Day Trial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-muted-foreground">
            Professional plan includes a <span className="font-semibold text-foreground">{FREE_TRIAL_DAYS}-day trial</span> before billing starts.
          </p>
          <p className="text-sm text-muted-foreground">
            Cancel anytime. No contracts. No hidden fees.
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
                    onClick={() => setTeamSize(prev => Math.max(1, prev - 1))}
                    disabled={teamSize === 1}
                    className="p-3 rounded-lg border border-primary/30 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Decrease team size"
                  >
                    <Minus className="h-5 w-5" />
                  </button>

                  <div className="text-center min-w-[100px]">
                    <div className="text-3xl font-bold text-primary">
                      <AnimatedNumber value={teamSize} />
                    </div>
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
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 agent</span>
                  <span>50 agents</span>
                </div>
              </div>

              <div className="mt-4 text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm">
                  <strong className="text-primary">Your plan: Forge ITSM {forgePlan.name}</strong>
                  <span className="text-muted-foreground"> — {forgePlan.agentLimit}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {forgePlan.monthly === 0 ? 'Free forever' : `${formatPrice(forgePlan.monthly)}/month or $${forgePlan.yearly.toLocaleString()}/year`} + applicable sales tax
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
                        {forgePlan.monthly === 0 ? 'Free forever' : `$${forgePlan.perAgent}/agent/mo · ${forgePlan.agentLimit}`}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        {forgePlan.yearly === 0 ? 'FREE' : (
                          <>
                            $<AnimatedNumber
                              value={forgePlan.yearly}
                              format={(val) => val.toLocaleString()}
                            />
                          </>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {forgePlan.yearly === 0 ? 'forever' : 'per year + tax'}
                      </div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      —
                    </td>
                  </tr>

                  {/* Competitor Rows */}
                  {competitors.map((competitor) => {
                    const savings = calculateSavingsVsCompetitor(competitor.pricePerAgent);
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
                            $<AnimatedNumber
                              value={savings.competitorYearly}
                              format={(val) => val.toLocaleString()}
                            />
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <motion.div
                            className="inline-flex flex-col items-center gap-1"
                            key={`${competitor.name}-${savings.savings}`}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                              <span className="text-green-700 dark:text-green-300 font-semibold text-sm">
                                💸 Save $<AnimatedNumber
                                  value={savings.savings}
                                  format={(val) => val.toLocaleString()}
                                />
                              </span>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                              <AnimatedNumber value={parseInt(savings.percentSavings)} />% less
                            </div>
                          </motion.div>
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
                    Prices shown are before tax. Sales tax will be calculated automatically at checkout based on your location and applicable rates (Professional plan only). Free plan has no charges or taxes.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-muted-foreground text-center mt-6">
              Competitor prices based on publicly available pricing as of {COMPETITOR_PRICING_DATE}. Prices may vary based on region, features selected, and promotional offers. Please verify current pricing on vendor websites.
            </p>

            {/* Source Citations */}
            <div className="mt-8 p-6 rounded-lg bg-background/50 border border-border/30">
              <h3 className="font-semibold mb-3 text-sm">Sources:</h3>
              <ol className="text-xs space-y-2 text-muted-foreground">
                <li>
                  <sup className="text-primary">1</sup> {COMPETITORS.zendesk.name} Suite {COMPETITORS.zendesk.planName}: <a href="https://www.zendesk.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zendesk Official Pricing</a> ({formatPrice(COMPETITORS.zendesk.pricePerAgent, false)}/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">2</sup> {COMPETITORS.freshdesk.name} {COMPETITORS.freshdesk.planName}: <a href="https://www.freshworks.com/freshdesk/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Freshworks Official Pricing</a> ({formatPrice(COMPETITORS.freshdesk.pricePerAgent, false)}/agent/mo, billed annually)
                </li>
                <li>
                  <sup className="text-primary">3</sup> {COMPETITORS.jira.name} {COMPETITORS.jira.planName}: <a href="https://www.atlassian.com/software/jira/service-management/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Atlassian Service Management Pricing</a> ({formatPrice(COMPETITORS.jira.pricePerAgent, false)}/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">4</sup> {COMPETITORS.zoho.name} {COMPETITORS.zoho.planName}: <a href="https://www.zoho.com/desk/pricing.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Zoho Desk Pricing & Editions</a> ({formatPrice(COMPETITORS.zoho.pricePerAgent, false)}/agent/mo)
                </li>
                <li>
                  <sup className="text-primary">5</sup> {COMPETITORS.helpdesk.name} {COMPETITORS.helpdesk.planName}: <a href="https://www.helpdesk.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">HelpDesk Official Pricing</a> ({formatPrice(COMPETITORS.helpdesk.pricePerAgent, false)}/user/mo, billed annually)
                </li>
              </ol>
              <p className="text-xs text-muted-foreground mt-4 italic">
                * Forge ITSM Free plan: $0 for up to 2 agents. Professional plan: flat-rate pricing with per-agent overages. Per-agent prices shown for comparison purposes only.
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
                    Agents are IT staff who work on and resolve tickets. End users who submit tickets don't count toward your agent limit - you can have unlimited end users at no extra cost on both Free and Professional plans.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is the Free plan really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! The Free plan is completely free forever for up to 2 agents. No credit card required, no trial period, no hidden fees. You get full access to all features including SLA management, knowledge base, custom fields, and reports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I upgrade from Free to Professional?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! You can upgrade at any time from your billing page. Your upgrade takes effect immediately, and you'll get a {FREE_TRIAL_DAYS}-day trial of the Professional plan before any charges begin.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do additional agents work on the Professional plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The Professional plan includes 3 agents. Each additional agent costs ${formatPrice(OVERAGE_FEE)}/month. For example, if you need 5 agents, you'll pay ${formatPrice(PLANS.paid.monthlyPrice)} + (2 × ${formatPrice(OVERAGE_FEE)}) = ${formatPrice(PLANS.paid.monthlyPrice + (2 * OVERAGE_FEE))}/month.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I downgrade from Professional back to Free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, but you'll need to reduce your agent count to 2 or fewer first. Once your team size meets the Free plan requirements, you can downgrade anytime from your billing page.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processor. The Free plan requires no payment method.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a contract or can I cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No contract required. You can cancel anytime and you'll retain access until the end of your current billing period. No cancellation fees, ever. Free plan users can use the service indefinitely.
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
                    The Free plan has no charges or taxes. For the Professional plan, prices shown are before tax. Sales tax is calculated automatically at checkout based on your billing location. We use Stripe Tax to ensure accurate tax rates for your state or country. You'll see the exact tax amount before completing your purchase.
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need to. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup?plan=free" onClick={() => signupTracker.trackButtonClick('Pricing - Bottom CTA Free')}>
              <Button size="xl" variant="outline" className="gap-2 border-2">
                Start Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup?plan=paid" onClick={() => signupTracker.trackButtonClick('Pricing - Bottom CTA Paid')}>
              <Button size="xl" className="gap-2">
                Start Professional Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
