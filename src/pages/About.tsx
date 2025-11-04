import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Code, Users } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

export default function About() {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="About Forge ITSM - Built by IT Professionals for IT Teams"
        description="Learn about Forge ITSM. Created by an IT professional with 10+ years experience who was tired of overpriced, overcomplicated ticketing systems. Simple, honest, and powerful ITSM software."
        keywords="about Forge ITSM, IT professional software, ITSM company, help desk developer, ticketing system creator"
        canonical="https://forge-itsm.com/about"
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built by Someone Who's Been There
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            After 10+ years in IT, I got tired of overpaying for complicated ticketing systems. So I built the solution I always wanted.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I spent over a decade working in IT for small and medium-sized businesses. Every place I worked faced the same dilemma:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Enterprise platforms like Zendesk and ServiceNow cost $3,000-$12,000+ per year for a small team</li>
                  <li>They're packed with features we'd never use, making them unnecessarily complex</li>
                  <li>Setup often required expensive consultants or weeks of training</li>
                  <li>Free tools lacked critical features like SLA management and proper reporting</li>
                </ul>
                <p>
                  Small IT teams were stuck choosing between overpaying for bloat or settling for tools that couldn't do the job.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I decided to build what I wished existed: a full-featured ITSM system designed specifically for small to medium IT teams, with honest pricing that doesn't punish growth.
                </p>
                <p className="font-semibold text-foreground">
                  Forge ITSM includes everything you need - SLA management, automation, knowledge base, custom fields, reports - at a fraction of the cost.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>No feature tiers - everything's included at every price point</li>
                  <li>No per-user charges for end users - only agents count</li>
                  <li>Simple enough to start using immediately, powerful enough to scale</li>
                  <li>Built on modern technology (Cloudflare edge network) for speed and reliability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My goal is simple: give small and medium IT teams the professional tools they need without the enterprise price tag.
                </p>
                <p>
                  This is an independent project, built with care and purpose. No venture capital. No shareholders demanding exponential growth. Just honest software at honest prices, improving based on real feedback from real IT professionals.
                </p>
                <p className="font-semibold text-foreground">
                  I'm building the tool I wish I'd had throughout my IT career - and I hope it helps your team thrive.
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
                Core principles behind Forge ITSM
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Built with Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every feature is designed based on real IT experience, not boardroom theories. We build what IT teams actually need.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customer-Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No investors to please means we can focus entirely on making our customers successful. Your feedback directly shapes the product.
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
                    Built on cutting-edge technology (Cloudflare edge network) for global performance, automatic scaling, and rock-solid reliability.
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
          <h2 className="text-3xl md:text-4xl font-bold">Join IT Teams Who Choose Better Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your 30-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button size="xl" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="xl" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
