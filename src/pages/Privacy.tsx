export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Forge ITSM Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm">
          <strong>Last Updated:</strong> October 24, 2025
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p>
            Forge ITSM ("we," "our," or "us"), operated by Forge Underground and Joshua Klimek, a solo developer, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web-based ITSM ticketing Service hosted on Cloudflare.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-foreground">Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and email address</li>
            <li>Company name</li>
            <li>Password (encrypted)</li>
            <li>Billing information (processed via Stripe)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Usage Data</h3>
          <p>Automatically collected:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and features used</li>
            <li>Time and date of access</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Customer Data</h3>
          <p>
            You upload/create: tickets (e.g., requestor, assignee, status, priority, description), custom fields, knowledge base articles. You retain ownership.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p>To:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, maintain the Service (isolated per-client instances on Cloudflare Pages, Wrangler APIs, D1 DB)</li>
            <li>Process subscriptions/payments</li>
            <li>Send administrative updates/support responses</li>
            <li>Improve/optimize Service</li>
            <li>Detect/prevent fraud/abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. How We Share Your Information</h2>
          <p>We do not sell personal information. Sharing only:</p>

          <h3 className="text-xl font-semibold text-foreground">Service Providers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cloudflare:</strong> Hosting, APIs, DB (GDPR-compliant; no HIPAA BAA)</li>
            <li><strong>Stripe:</strong> Payments</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Legal Requirements</h3>
          <p>
            Disclosure if required by law or valid requests.
          </p>

          <h3 className="text-xl font-semibold text-foreground">Business Transfers</h3>
          <p>
            In merger/acquisition/sale; notify you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
          <p>Measures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>Role-based access controls</li>
            <li>Regular assessments</li>
            <li>30-day point-in-time backups/restores via D1</li>
          </ul>
          <p>
            No method is 100% secure; we disclaim absolute guarantees.
          </p>
          <p>
            <strong>HIPAA Notice:</strong> Not HIPAA-compliant. Do not store PHI; you assume all risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Data Retention</h2>
          <p>
            As long as account active or needed for Service. Post-cancellation: 30 days for reactivation; then permanent deletion. Export data anytime.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">7. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, delete, export, object to processing</li>
          </ul>
          <p>
            Contact:{' '}
            <a href="mailto:forgeundergroundproject@gmail.com" className="text-primary hover:underline">
              forgeundergroundproject@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">8. Cookies and Tracking</h2>
          <p>
            Used for authentication, preferences, analytics. Control via browser; disabling may limit functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
          <p>
            Not for under 18; delete if collected knowingly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">10. International Data Transfers</h2>
          <p>
            To/from countries via Cloudflare; safeguards include EU Data Residency options.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">11. California Privacy Rights (CCPA)</h2>
          <p>
            Residents: Right to know, delete, opt-out of sales (none occur).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">12. GDPR Rights (EEA Users)</h2>
          <p>
            Access, rectification, erasure, portability, objection.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">13. Changes to This Privacy Policy</h2>
          <p>
            Updates notified via email/Service. Continued use = acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">14. Contact Us</h2>
          <p>
            <a href="mailto:forgeundergroundproject@gmail.com" className="text-primary hover:underline">
              forgeundergroundproject@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
