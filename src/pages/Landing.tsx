import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Zap, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { OrganizationSchema, SoftwareApplicationSchema } from '@/components/SchemaMarkup';
import { signupTracker } from '@/lib/signupTracker';
import { PLANS, COMPETITORS, formatPrice } from '@/config/pricing';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="Free ITSM Software | Simple IT Ticketing System for Small Business - Forge ITSM"
        description={`Free ITSM software for small teams. Simple IT ticketing system with unlimited users, knowledge base, and reports. Start free or upgrade to ${formatPrice(PLANS.paid.monthlyPrice, false)}/mo. No bloat like ServiceNow.`}
        keywords="free itsm software, it ticketing software, simple ITSM, cheap ITSM, affordable help desk, simple help desk software, cheap alternative to ServiceNow, ITSM for small business, free help desk, ticket management software"
        canonical="https://forge-itsm.com"
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      {/* Hero Section - Simplicity Focused */}
      <section className="relative overflow-hidden bg-mesh-gradient">
        <motion.div
          className="absolute inset-0 bg-dot-pattern opacity-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
        <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-primary/10 border-primary/20 hover:bg-primary/15 transition-colors">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" />
                IT Ticketing That Actually Makes Sense
              </Badge>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <Badge variant="outline" className="text-xs sm:text-sm px-3 py-1.5 bg-background/50 border-primary/30">
                ✨ Join 500+ IT teams using Forge ITSM
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              Free ITSM Software & IT Ticketing System
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            >
              Stop fighting with overcomplicated enterprise software.
              <br className="hidden sm:block" />
              Stop settling for feature-lacking free tools.
              <br className="hidden sm:block" />
              Get a <strong className="text-foreground">simple help desk system</strong> and <strong className="text-foreground">ticket management software</strong> that's actually pleasant to use.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Landing - Hero CTA')}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all group">
                    Get Started Free
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/features">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border/60 hover:bg-muted/50 transition-all">
                    See All Features
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different - Bold & Opinionated */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Free ITSM Software – <span className="text-primary">Just Tickets, No Fluff</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Free help desk software and IT ticketing system that focuses on what matters: resolving tickets quickly without complexity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Complete ITSM Platform */}
            <motion.div
              className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="space-y-4">
                <motion.div
                  className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Zap className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold">Affordable Help Desk with Unlimited End Users</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <Link to="/pricing" className="text-primary hover:underline">Cheap ITSM alternative</Link> with transparent, flat-rate pricing. Every plan includes SLA management, ticket automation, custom fields, reporting dashboards, and knowledge base. No per-user fees, no hidden costs, no "upgrade to unlock" <strong className="text-foreground">nonsense</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  All features included • Predictable costs
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Simple Yet Powerful */}
            <motion.div
              className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="space-y-4">
                <motion.div
                  className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Clock className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold">Simple Help Desk Software That Actually Gets Used</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <Link to="/features" className="text-primary hover:underline">Easy ticketing system</Link> that takes 5 minutes to deploy—not weeks. Clean, intuitive interface built by IT professionals for IT teams. Agents actually enjoy using it because it's <Link to="/product-tour" className="text-primary hover:underline">simple</Link>, fast, and gets out of their way. No enterprise bloat, no complex training, no consultants <strong className="text-foreground">required</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Quick deployment • Zero learning curve
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Cloudflare Infrastructure */}
            <motion.div
              className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="space-y-4">
                <motion.div
                  className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Shield className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold">Enterprise-Grade Cloud Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure, cloud-based ITSM powered by Cloudflare's global CDN and edge network. Lightning-fast performance worldwide, 99.9% uptime SLA, enterprise-grade security, and automatic scaling. Enterprise reliability at <strong className="text-foreground">SMB pricing</strong>.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Cloudflare-powered • 99.9% uptime
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Show The Competition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Cheap ITSM Alternative to <span className="text-primary">ServiceNow & Freshservice</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Same features as enterprise tools. Way better price. Simple setup. No bloat.
              </p>
            </div>

            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/40">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4">
                      <div className="font-bold text-primary">Forge ITSM</div>
                      <div className="text-sm font-normal text-muted-foreground">Free or {formatPrice(PLANS.paid.monthlyPrice)}/mo</div>
                    </th>
                    <th className="p-4">
                      <div className="font-bold">{COMPETITORS.zendesk.name}</div>
                      <div className="text-sm font-normal text-muted-foreground">{formatPrice(COMPETITORS.zendesk.pricePerAgent, false)}/mo</div>
                    </th>
                    <th className="p-4">
                      <div className="font-bold">{COMPETITORS.freshdesk.name}</div>
                      <div className="text-sm font-normal text-muted-foreground">{formatPrice(COMPETITORS.freshdesk.pricePerAgent, false)}/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">SLA Management</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Custom Fields</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Advanced Reporting</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Knowledge Base</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">Unlimited End-Users (Ticket Submitters)</td>
                    <td className="p-4 text-center bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><X className="h-5 w-5 text-destructive mx-auto" /><div className="text-xs text-muted-foreground">$19/user</div></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-t-2 border-border/40 bg-primary/10">
                    <td className="p-4 font-bold">Your Annual Savings</td>
                    <td className="p-4 text-center font-bold text-foreground">—</td>
                    <td className="p-4 text-center font-bold text-green-500">$660+/year</td>
                    <td className="p-4 text-center font-bold text-green-500">$228/year</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm text-muted-foreground mt-4">
                *Forge ITSM is not currently HIPAA-compliant for PHI storage. While our infrastructure
                (Cloudflare Workers, D1, R2) meets HIPAA technical safeguards including encryption at
                rest and in transit, we do not currently have a Business Associate Agreement (BAA) in
                place. Healthcare organizations should not store Protected Health Information (PHI) in
                tickets until we obtain enterprise-level BAA coverage. Your data remains secure, but
                regulatory compliance for PHI requires the BAA. <a href="/terms" className="underline">See terms</a>.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  See Our Affordable Help Desk Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ITSM Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              What is ITSM Software?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-foreground">ITSM software</strong> (IT Service Management software), also called <strong className="text-foreground">IT ticketing systems</strong> or <strong className="text-foreground">help desk software</strong>, helps IT teams track, manage, and resolve support requests efficiently. An <strong className="text-foreground">ITSM platform</strong> centralizes all service requests into one <strong className="text-foreground">ticket management software</strong> system.
              </p>
              <p className="text-lg leading-relaxed">
                Forge ITSM is a <strong className="text-foreground">free ITSM platform</strong> designed for small teams who need a <strong className="text-foreground">simple help desk system</strong> without enterprise complexity. Our <strong className="text-foreground">free IT ticketing software</strong> includes everything you need: SLA management, knowledge base, automation, and reports—all in one easy-to-use <strong className="text-foreground">help desk system</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-mesh-gradient py-20 md:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative mx-auto px-4 text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join IT teams who chose simplicity over complexity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Landing - Bottom CTA')}>
              <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Start free forever • No credit card required • Upgrade anytime
          </p>
        </div>
      </section>
    </div>
  );
}
