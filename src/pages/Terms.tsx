import { PLANS, OVERAGE_FEE, FREE_TRIAL_DAYS, formatPrice } from '@/config/pricing';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Forge ITSM Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm">
          <strong>Effective Date:</strong> October 24, 2025
        </p>
        <p>
          These Terms of Service ("Terms") govern your access to and use of Forge ITSM ("Service"), a web-based IT ticketing system provided by Forge Underground, and Joshua Klimek (developer). By accessing or using the Service, you ("you," "user," "customer") agree to these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have authority to bind such entity.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Description of Service</h2>
          <p>
            The Service provides a self-serve IT ticketing platform with features including ticket management, SLA tracking, custom fields, automations, and user portals. Hosted on Cloudflare infrastructure. Each subscription deploys an isolated instance. Service is provided "as is" and may contain bugs or interruptions, as it is a new platform. We are confident in its current state, but we are actively developing new tools and additions. It is possible you may have to refresh from time to time, we offer notifications when updates are pushed to production but we strive to do this in the early hours of the morning to prevent any interruptions. (CST)
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Eligibility</h2>
          <p>
            You must be 18+ and capable of forming a binding contract. Businesses must comply with applicable laws. We may refuse service at our discretion.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Accounts and Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create an account with accurate information.</li>
            <li>Maintain account confidentiality; you are responsible for all activity under your account.</li>
            <li>Notify us immediately of unauthorized use.</li>
            <li>We are not liable for losses from unauthorized access, users may use weak passwords, we offer password requirements within the site and it is up to you as the agreeing party to configure these as you see fit.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Subscriptions and Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Trial:</strong> {FREE_TRIAL_DAYS}-day trial on Professional plan; charges will occur automatically after trial expiry if not cancelled. If there is an issue with cancellation reach out immediately. forgeundergroundproject@gmail.com</li>
            <li><strong>Plans:</strong> {PLANS.free.name} plan: {formatPrice(PLANS.free.monthlyPrice)}/mo ({PLANS.free.includedAgents} agents, no overages). {PLANS.paid.name} plan: {formatPrice(PLANS.paid.monthlyPrice)}/mo ({PLANS.paid.includedAgents} agents) + {formatPrice(OVERAGE_FEE)} per additional agent. Monthly billing via Stripe for paid plans.</li>
            <li><strong>Payments:</strong> Auto-renew unless canceled. Late payments may cause termination.</li>
            <li><strong>Taxes:</strong> You pay all applicable taxes.</li>
            <li><strong>Changes:</strong> Upgrade immediate; downgrade next cycle.</li>
            <li><strong>Cancellation:</strong> Via account dashboard; access until period end. No refunds except as required by law.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. User Content and Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You retain ownership of your data (tickets, etc.).</li>
            <li>You grant us a worldwide, non-exclusive license to host, backup, and process your data for Service operation.</li>
            <li>You are responsible for data accuracy, legality, and backups. Export data before cancellation.</li>
            <li>On termination: Data retained 30 days for reactivation; then permanently deleted.</li>
            <li>Contact forgeundergroundproject@gmail.com for data exports if system export fails.</li>
            <li>Backups: 30-day point-in-time restore available; not guaranteed against loss.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Prohibited Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No illegal activities, spam, or interference with Service.</li>
            <li>No reverse engineering, scraping, or unauthorized access.</li>
            <li>Comply with Acceptable Use Policy (incorporated herein).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service and all content (code, UI, docs) are our property or licensed to us. No transfer except as needed for Service use.</li>
            <li>Your feedback may be used without compensation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrates with Stripe (payments), Cloudflare (hosting). Your use subject to their terms.</li>
            <li>We are not liable for third-party failures.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">9. Disclaimers and HIPAA Notice</h2>
          <div className="space-y-3">
            <p>
              <strong>AS IS BASIS:</strong> Service provided "AS IS" WITHOUT WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR PURPOSE, OR NON-INFRINGEMENT. New platform may have bugs, downtime, or errors. We disclaim all liability for interruptions. We will work with you as fast as possible to resolve issues.
            </p>
            <p>
              <strong>HIPAA/PHI:</strong> Service is NOT HIPAA compliant. No Business Associate Agreement (BAA) with Cloudflare. Do NOT store Protected Health Information (PHI) or sensitive medical data. You assume all risk and liability for any PHI use, including fines or breaches. GDPR-compliant via Cloudflare; see Privacy Policy for details.
            </p>
            <p>
              <strong>Security:</strong> While we use reasonable security (e.g., encryption, RBAC), no system is impenetrable. You must use strong passwords and secure practices.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">10. Limitation of Liability</h2>
          <div className="space-y-3">
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> Our total liability shall not exceed fees paid by you in the prior 12 months.
            </p>
            <p>
              <strong>NO CONSEQUENTIAL DAMAGES:</strong> No indirect, incidental, special, punitive, or consequential damages (e.g., lost profits, data loss), even if advised of possibility.
            </p>
            <p>
              <strong>Indemnification:</strong> You indemnify us against claims arising from your use, data, or violations.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">11. Termination</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We may suspend/terminate for breach, non-payment, or at discretion with notice. Email will be used based on the users data at signup.</li>
            <li>On termination: Access ends; data as per Section 5.</li>
            <li>Surviving provisions: 4,5,6,7,8,9,10,11,12,13.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">12. Governing Law and Disputes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Governed by laws of Minnesota, USA, without conflicts principles.</li>
            <li>Disputes: Exclusive jurisdiction in Anoka courts. No class actions; arbitration via AAA if elected.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">13. Changes to Terms</h2>
          <p>
            We may update Terms with 30 days' notice (email/dashboard). Continued use constitutes acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">14. Miscellaneous</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entire agreement; supersedes priors.</li>
            <li>Severability: Invalid provisions do not affect others.</li>
            <li>No waiver unless written.</li>
            <li>Contact: forgeundergroundproject@gmail.com.</li>
          </ul>
        </section>

        <section className="space-y-4 pt-6 border-t">
          <p className="font-medium text-foreground">
            By using the Service, you acknowledge reading, understanding, and agreeing to these Terms.
          </p>
        </section>
      </div>
    </div>
  );
}
