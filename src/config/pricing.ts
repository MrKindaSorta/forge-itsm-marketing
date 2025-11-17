/**
 * Centralized Pricing Configuration for Forge ITSM
 *
 * Single source of truth for all pricing across the marketing site.
 * Update prices here to reflect changes throughout the entire site.
 */

// ========================================
// FORGE ITSM PLANS
// ========================================

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  includedAgents: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export const PLANS: Record<'free' | 'paid', Plan> = {
  free: {
    id: 'free',
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    includedAgents: 2,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 2 Agents',
      'Unlimited End Users',
      'Unlimited Tickets',
      'SLA Management',
      'Knowledge Base',
      'Custom Fields',
      'Reports & Analytics',
      'Community Support',
    ],
  },
  paid: {
    id: 'paid',
    name: 'Professional',
    monthlyPrice: 19.99,
    yearlyPrice: 239.88, // Monthly × 12
    includedAgents: 3,
    description: 'For growing teams with advanced needs',
    features: [
      '3 Agents Included',
      'Additional agents at $4.99/month',
      'Unlimited End Users',
      'Unlimited Tickets',
      'SLA Management',
      'Knowledge Base',
      'Custom Fields',
      'Reports & Analytics',
      'Priority Support',
    ],
    popular: true,
  },
};

// Overage fee for paid plan
export const OVERAGE_FEE = 4.99;

// Free trial duration (for paid plan only)
export const FREE_TRIAL_DAYS = 30;

// Agent limits
export const FREE_PLAN_AGENT_LIMIT = 2;
export const PAID_PLAN_AGENT_LIMIT = 3;

// ========================================
// COMPETITOR PRICING
// ========================================

export interface CompetitorPricing {
  name: string;
  pricePerAgent: number;
  planName: string;
  limitations?: string[];
}

export const COMPETITORS: Record<string, CompetitorPricing> = {
  zendesk: {
    name: 'Zendesk',
    pricePerAgent: 115,
    planName: 'Suite Professional',
    limitations: ['+ $19/end-user/month', 'Complex setup', 'Requires training'],
  },
  freshdesk: {
    name: 'Freshdesk',
    pricePerAgent: 49,
    planName: 'Pro',
    limitations: ['Per-agent pricing only', 'Limited customization'],
  },
  freshdeskPro: {
    name: 'Freshdesk Pro',
    pricePerAgent: 59,
    planName: 'Pro',
    limitations: ['Per-agent pricing adds up fast'],
  },
  freshdeskGrowth: {
    name: 'Freshdesk Growth',
    pricePerAgent: 18,
    planName: 'Growth',
    limitations: ['Missing key features like SLA management'],
  },
  servicenow: {
    name: 'ServiceNow',
    pricePerAgent: 100,
    planName: 'Standard',
    limitations: ['$150-300/hr consultant fees', 'Months of implementation', 'Enterprise complexity'],
  },
  jira: {
    name: 'Jira Service Management',
    pricePerAgent: 20,
    planName: 'Standard',
    limitations: ['Developer-focused', 'Steep learning curve'],
  },
  zoho: {
    name: 'Zoho Desk',
    pricePerAgent: 23,
    planName: 'Professional',
    limitations: ['Limited integrations', 'Basic features'],
  },
  helpdesk: {
    name: 'HelpDesk.com',
    pricePerAgent: 29,
    planName: 'Team',
    limitations: ['Per-agent pricing', 'Limited features'],
  },
};

// Pricing comparison timestamp for disclaimers
export const COMPETITOR_PRICING_DATE = 'January 2025';

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Calculate annual price for a plan
 */
export function calculateAnnualPrice(planId: keyof typeof PLANS, extraAgents: number = 0): number {
  const plan = PLANS[planId];

  if (planId === 'paid' && extraAgents > 0) {
    const monthlyTotal = plan.monthlyPrice + (extraAgents * OVERAGE_FEE);
    return monthlyTotal * 12;
  }

  return plan.yearlyPrice;
}

/**
 * Calculate monthly cost for paid plan with extra agents
 */
export function getPaidPlanCost(totalAgents: number): number {
  const plan = PLANS.paid;

  if (totalAgents <= plan.includedAgents) {
    return plan.monthlyPrice;
  }

  const extraAgents = totalAgents - plan.includedAgents;
  return plan.monthlyPrice + (extraAgents * OVERAGE_FEE);
}

/**
 * Calculate yearly savings compared to a competitor
 */
export function calculateSavings(
  competitorKey: keyof typeof COMPETITORS,
  teamSize: number,
  forgePlan: keyof typeof PLANS = 'paid'
): number {
  const competitor = COMPETITORS[competitorKey];
  const forgePlan_obj = PLANS[forgePlan];

  // Calculate Forge cost based on team size
  let forgeMonthlyCost = forgePlan_obj.monthlyPrice;

  if (forgePlan === 'paid' && teamSize > forgePlan_obj.includedAgents) {
    const extraAgents = teamSize - forgePlan_obj.includedAgents;
    forgeMonthlyCost = forgePlan_obj.monthlyPrice + (extraAgents * OVERAGE_FEE);
  }

  // Competitor annual cost
  const competitorAnnual = competitor.pricePerAgent * teamSize * 12;

  // Forge annual cost
  const forgeAnnual = forgeMonthlyCost * 12;

  return competitorAnnual - forgeAnnual;
}

/**
 * Calculate monthly cost for a competitor based on team size
 */
export function getCompetitorMonthlyCost(
  competitorKey: keyof typeof COMPETITORS,
  teamSize: number
): number {
  const competitor = COMPETITORS[competitorKey];
  return competitor.pricePerAgent * teamSize;
}

/**
 * Calculate annual cost for a competitor based on team size
 */
export function getCompetitorAnnualCost(
  competitorKey: keyof typeof COMPETITORS,
  teamSize: number
): number {
  return getCompetitorMonthlyCost(competitorKey, teamSize) * 12;
}

/**
 * Format price for display
 */
export function formatPrice(amount: number, showCents: boolean = true): string {
  if (showCents) {
    return `$${amount.toFixed(2)}`;
  }
  return `$${Math.round(amount)}`;
}

/**
 * Get recommended plan based on team size
 */
export function getRecommendedPlan(agentCount: number): keyof typeof PLANS {
  if (agentCount <= PLANS.free.includedAgents) return 'free';
  return 'paid';
}

/**
 * Calculate exact Forge ITSM cost for a specific team size
 */
export function getForgeITSMCost(agentCount: number): {
  plan: keyof typeof PLANS;
  monthlyPrice: number;
  yearlyPrice: number;
  extraAgents: number;
} {
  const planKey = getRecommendedPlan(agentCount);
  const plan = PLANS[planKey];

  let monthlyPrice = plan.monthlyPrice;
  let extraAgents = 0;

  if (planKey === 'paid' && agentCount > plan.includedAgents) {
    extraAgents = agentCount - plan.includedAgents;
    monthlyPrice = getPaidPlanCost(agentCount);
  }

  return {
    plan: planKey,
    monthlyPrice,
    yearlyPrice: monthlyPrice * 12,
    extraAgents,
  };
}

// Legacy function name for backwards compatibility
export const getBusinessPlanCost = getPaidPlanCost;
export const BUSINESS_OVERAGE_FEE = OVERAGE_FEE;
