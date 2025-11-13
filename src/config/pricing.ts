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

export const PLANS: Record<'starter' | 'professional' | 'business', Plan> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 59.99,
    yearlyPrice: 719.88,
    includedAgents: 3,
    description: 'Perfect for small IT teams getting started',
    features: [
      'Up to 3 agents',
      'Unlimited end-users',
      'Unlimited tickets',
      'Knowledge base',
      'Email notifications',
      'Custom fields',
      'SLA management',
      'Reports & analytics',
      'Cloudflare-powered CDN',
    ],
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 79.99,
    yearlyPrice: 959.88,
    includedAgents: 5,
    description: 'For growing teams that need more agents',
    features: [
      'Up to 5 agents',
      'Everything in Starter',
      'Advanced automation',
      'Custom branding',
      'Priority support',
      'API access',
      'Webhooks',
    ],
    popular: true,
  },
  business: {
    id: 'business',
    name: 'Business',
    monthlyPrice: 119.99,
    yearlyPrice: 1439.88,
    includedAgents: 10,
    description: 'For larger teams with advanced needs',
    features: [
      'Up to 10 agents',
      'Everything in Professional',
      'Unlimited custom fields',
      'Advanced reporting',
      'Dedicated support',
      'Custom integrations',
      'SSO (coming soon)',
    ],
  },
};

// Business plan overage fee
export const BUSINESS_OVERAGE_FEE = 9.99;

// Free trial duration
export const FREE_TRIAL_DAYS = 30;

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

  if (planId === 'business' && extraAgents > 0) {
    const monthlyTotal = plan.monthlyPrice + (extraAgents * BUSINESS_OVERAGE_FEE);
    return monthlyTotal * 12;
  }

  return plan.yearlyPrice;
}

/**
 * Calculate monthly cost for business plan with extra agents
 */
export function getBusinessPlanCost(totalAgents: number): number {
  const plan = PLANS.business;

  if (totalAgents <= plan.includedAgents) {
    return plan.monthlyPrice;
  }

  const extraAgents = totalAgents - plan.includedAgents;
  return plan.monthlyPrice + (extraAgents * BUSINESS_OVERAGE_FEE);
}

/**
 * Calculate yearly savings compared to a competitor
 */
export function calculateSavings(
  competitorKey: keyof typeof COMPETITORS,
  teamSize: number,
  forgePlan: keyof typeof PLANS = 'business'
): number {
  const competitor = COMPETITORS[competitorKey];
  const forgeCost = PLANS[forgePlan].monthlyPrice;

  // Competitor annual cost
  const competitorAnnual = competitor.pricePerAgent * teamSize * 12;

  // Forge annual cost (assuming business plan for larger teams)
  const forgeAnnual = forgeCost * 12;

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
  if (agentCount <= PLANS.starter.includedAgents) return 'starter';
  if (agentCount <= PLANS.professional.includedAgents) return 'professional';
  return 'business';
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

  if (planKey === 'business' && agentCount > plan.includedAgents) {
    extraAgents = agentCount - plan.includedAgents;
    monthlyPrice = getBusinessPlanCost(agentCount);
  }

  return {
    plan: planKey,
    monthlyPrice,
    yearlyPrice: monthlyPrice * 12,
    extraAgents,
  };
}
