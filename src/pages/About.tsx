import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Code, Users, Target } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { signupTracker } from '@/lib/signupTracker';

export default function About() {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="About Forge Underground | Affordable ITSM Built by IT Professionals"
        description="Meet Forge Underground: a small team of IT pros who built affordable ticketing software for small businesses. No bloat, no BS pricing. Modern ITSM for teams of 10-200."
        keywords="affordable ITSM software, IT ticketing for small business, help desk software for MSPs, ticketing software built by IT professionals, Forge Underground"
        canonical="https://forge-itsm.com/about"
      />

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Forge Underground",
          "url": "https://forge-itsm.com",
          "logo": "https://forge-itsm.com/logo.png",
          "description": "Small team of IT professionals building affordable ITSM software for small businesses",
          "foundingDate": "2024",
          "founders": [{
            "@type": "Person",
            "jobTitle": "Founder & Developer"
          }],
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "3-4"
          },
          "knowsAbout": ["ITSM Software", "IT Ticketing Systems", "Help Desk Software", "Small Business IT"],
          "sameAs": [
            "https://github.com/MrKindaSorta"
          ]
        })}
      </script>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            IT Professionals Building Better Tools for IT Professionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We got tired of overpaying for bloated ticketing systems—so we built the affordable, powerful ITSM software we needed.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why We Built Forge ITSM</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  As IT professionals supporting small and medium businesses, we faced the same problem everywhere:
                  <span className="font-semibold text-foreground"> enterprise platforms like Zendesk and ServiceNow cost $3,000-$12,000+ per year for a small team</span>,
                  packed with features we'd never use. Free tools lacked critical capabilities like SLA management and proper reporting.
                </p>
                <p>
                  Small IT teams were stuck choosing between overpaying for complexity or settling for tools that couldn't do the job. So we built the solution we wished existed.
                </p>
                <p className="font-semibold text-foreground text-lg pt-2">
                  Forge ITSM includes everything you need—SLA management, automation, knowledge base, custom fields, reports—at a fraction of the cost.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>No feature tiers—everything's included at every price point</li>
                  <li>No per-user charges for end users—only agents count</li>
                  <li>Simple enough to start using immediately, powerful enough to scale</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mid-page CTA */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Try a Better Ticketing System?</h3>
              <p className="text-muted-foreground">
                Start your 30-day free trial. No credit card required.
              </p>
              <Link to="/signup" onClick={() => signupTracker.trackButtonClick('About - Mid CTA')}>
                <Button size="lg" className="gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Who We Are</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">
                  We're Forge Underground—a small team of developers with over 20 years of combined experience in IT operations and software development.
                </p>
                <p>
                  We're not backed by venture capital. We're not trying to build the next billion-dollar unicorn. We're building something usable and accessible, funded by our customers and improved based on real feedback from real IT professionals.
                </p>
                <p>
                  Every feature in Forge ITSM is designed based on hands-on IT experience—not boardroom theories. We understand the pain points because we've lived them.
                </p>
                <p className="font-semibold text-foreground">
                  Our mission: Give small and medium IT teams professional-grade tools without the enterprise price tag.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
              <p className="text-lg text-muted-foreground">
                The principles behind everything we build
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Built by IT Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every feature comes from real IT experience. We build what teams actually need, not what sells.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fair Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden fees, no gotchas. Transparent pricing that doesn't punish growth or success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Modern & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built on Cloudflare's edge network for enterprise-grade performance and automatic global scaling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customer-Obsessed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No investors means we answer only to you. Your feedback directly shapes the product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join IT Teams Who Choose Better Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your 30-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('About - Bottom CTA')}>
              <Button size="xl" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button size="xl" variant="outline">Explore Features</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
