export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm">
          <strong>Last Updated:</strong> January 2025
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p>
            Forge ITSM ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our Service.
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
            <li>Billing information (processed securely through Stripe)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Usage Data</h3>
          <p>We automatically collect certain information when you use the Service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and features used</li>
            <li>Time and date of access</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Customer Data</h3>
          <p>
            When you use our Service, you may upload or create content including tickets, user information,
            knowledge base articles, and other data. You retain full ownership of this data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain the Service</li>
            <li>Process your subscription and payments</li>
            <li>Send administrative information and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve and optimize the Service</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share information in the following circumstances:</p>

          <h3 className="text-xl font-semibold text-foreground">Service Providers</h3>
          <p>
            We use third-party service providers to help us operate the Service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cloudflare:</strong> Hosting and content delivery</li>
            <li><strong>Stripe:</strong> Payment processing</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">Legal Requirements</h3>
          <p>
            We may disclose information if required by law or in response to valid legal requests from
            authorities.
          </p>

          <h3 className="text-xl font-semibold text-foreground">Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of assets, your information may be
            transferred. We will notify you of any such change.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your information,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Encryption of sensitive data at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Automatic backups</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide the Service.
          </p>
          <p>
            <strong>After Cancellation:</strong> When you cancel your account, we retain your data for 30 days
            to allow for reactivation. After 30 days, all data is permanently deleted.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal information</li>
            <li><strong>Correct:</strong> Update inaccurate or incomplete information</li>
            <li><strong>Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Export:</strong> Download your data in a portable format</li>
            <li><strong>Object:</strong> Object to processing of your information</li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@forge-itsm.com" className="text-primary hover:underline">
              privacy@forge-itsm.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">8. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience. Cookies are small
            text files stored on your device.
          </p>
          <p>We use cookies for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authentication and security</li>
            <li>Remembering your preferences</li>
            <li>Analytics and performance monitoring</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may limit some functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
          <p>
            The Service is not intended for users under the age of 18. We do not knowingly collect information
            from children. If we become aware that we have collected information from a child, we will delete it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We take
            appropriate safeguards to ensure your information receives adequate protection.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">11. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy
            Act (CCPA), including the right to know what personal information we collect and how we use it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">12. GDPR Rights (European Users)</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have rights under the General Data
            Protection Regulation (GDPR), including rights to access, rectification, erasure, and data
            portability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes via
            email or through the Service. Your continued use after changes constitutes acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">14. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@forge-itsm.com" className="text-primary hover:underline">
              privacy@forge-itsm.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
