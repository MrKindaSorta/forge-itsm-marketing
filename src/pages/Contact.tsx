import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, HelpCircle, Check, AlertCircle, Loader2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { FAQSchema } from '@/components/SchemaMarkup';
import { signupTracker } from '@/lib/signupTracker';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiry: 'general',
    honeypot: '' // Honeypot field for bot detection
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Track contact form submission attempt
    signupTracker.trackEvent({
      eventType: 'contact_form_submit',
      pageSource: '/contact',
      eventData: {
        inquiry: formData.inquiry,
        company: formData.company ? 'provided' : 'not_provided'
      }
    });

    // Combine first and last name
    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;

    // Format message with subject and inquiry type
    const formattedMessage = `Subject: ${formData.subject}\n\nInquiry Type: ${formData.inquiry}\n\n${formData.message}`;

    try {
      const response = await fetch('https://forge-itsm.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          company: formData.company || null,
          message: formattedMessage,
          honeypot: formData.honeypot, // Send honeypot for backend validation
          turnstileToken: '' // TODO: Add Turnstile widget and pass token here
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else if (data.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          inquiry: 'general',
          honeypot: ''
        });
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Unable to send message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const faqs = [
    {
      question: "Do you charge per user like Zendesk?",
      answer: "No. We charge a flat monthly fee based on the number of agents (your IT staff). End-users who submit tickets are unlimited and free."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. There are no long-term contracts. Cancel anytime from your billing portal."
    },
    {
      question: "Do I need a credit card for the free tier?",
      answer: "No. The Free plan requires no credit card and is free forever. The Professional plan includes a 30-day trial, also with no credit card required upfront."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You can export all your data before canceling. After cancellation, your data is retained for 30 days in case you change your mind, then permanently deleted."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Contact Forge ITSM - Questions About IT Ticketing Software"
        description="Contact Forge ITSM for questions about our IT ticketing system. Get answers about pricing, features, setup, and support. We're here to help."
        keywords="contact ITSM, help desk support, ticketing software questions, ITSM customer service"
        canonical="https://forge-itsm.com/contact"
      />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:forgeundergroundproject@gmail.com" className="text-primary hover:underline font-medium">
                  forgeundergroundproject@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>General Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Questions about features, pricing, or integrations? Ask away.
                </p>
                <p className="text-sm text-muted-foreground">
                  Fill out the contact form below.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/50 py-20" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form and we'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-900">Unable to send message</p>
                      <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users, bots will fill it */}
                  <input
                    type="text"
                    id="honeypot"
                    name="website"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={loading}
                        maxLength={50}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={loading}
                        maxLength={50}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={loading}
                      maxLength={255}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={loading}
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={loading}
                      maxLength={200}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us more about what you need..."
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={loading}
                      maxLength={5000}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <select
                      id="inquiry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      disabled={loading}
                    >
                      <option value="general">General Question</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to questions you might have
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    In testing, most teams were up and running within an hour. The system is designed to be intuitive with no training required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I import data from my current system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not at this time. Though this is something we are working on.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer training or onboarding?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    At this time we are putting together a training package, and plan to offer onboarding for users who request it in the future. However I think you will find its not necessary. The product is very straight forward and intuitive.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All plans include email support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
