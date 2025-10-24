import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

// Initialize Stripe
const stripePromise = loadStripe('pk_live_51RgszMP3jQScPlwjBriazzwq4dT2qcv5L2DzlW99IpVnVdeoB7NCebqll7hYZDVn2JCTFGPKD8nXMUfMttxOIff600Hqrfe9iY');

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    subdomain: '',
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 59.99,
      agents: 3,
      features: ['Up to 3 Agents', 'Unlimited Users', 'All Features', 'Email Support']
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 79.99,
      agents: 5,
      popular: true,
      features: ['Up to 5 Agents', 'Unlimited Users', 'All Features', 'Priority Support']
    },
    {
      id: 'business',
      name: 'Business',
      price: 119.99,
      agents: 10,
      features: ['Up to 10 Agents', 'Unlimited Users', 'All Features', 'Priority Support', '$9.99/additional agent']
    }
  ];

  // Handle final form submission and Stripe checkout
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate subdomain availability
      const checkResponse = await fetch('https://itsm-backend.joshua-r-klimek.workers.dev/api/provision/check-subdomain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: formData.subdomain }),
      });

      const { available, error: availabilityError } = await checkResponse.json();

      if (!available) {
        setError(availabilityError || 'Subdomain is not available');
        setLoading(false);
        return;
      }

      // Create Stripe checkout session
      const sessionResponse = await fetch('https://itsm-backend.joshua-r-klimek.workers.dev/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          subdomain: formData.subdomain,
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
        }),
      });

      const { sessionId, error: sessionError } = await sessionResponse.json();

      if (sessionError) {
        setError(sessionError);
        setLoading(false);
        return;
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        setError('Failed to load Stripe');
        setLoading(false);
        return;
      }

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        setError(stripeError.message || 'Failed to redirect to checkout');
        setLoading(false);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  {step > 1 ? <Check className="h-4 w-4" /> : '1'}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Choose Plan</span>
              </div>
              <div className={`h-0.5 w-12 ${step >= 2 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  {step > 2 ? <Check className="h-4 w-4" /> : '2'}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Account Info</span>
              </div>
              <div className={`h-0.5 w-12 ${step >= 3 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  {step > 3 ? <Check className="h-4 w-4" /> : '3'}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Company Details</span>
              </div>
            </div>
          </div>

          {/* Step 1: Choose Plan */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Choose Your Plan</h1>
                <p className="text-muted-foreground">Start with a 30-day free trial. No credit card required.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-2 border-primary shadow-lg'
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>
                        <div className="text-3xl font-bold text-foreground mt-2">${plan.price}</div>
                        <div className="text-sm">/month</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={() => setStep(2)}
                  disabled={!selectedPlan}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Account Info */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Set up your login credentials</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <p className="text-xs text-muted-foreground">At least 8 characters with letters and numbers</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 gap-2">
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Company Details */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Tell us about your organization</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleCheckout}>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Acme Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <select
                      id="companySize"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select
                      id="industry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Select industry...</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subdomain">Subdomain *</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="subdomain"
                        placeholder="acme"
                        value={formData.subdomain}
                        onChange={(e) => setFormData({...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')})}
                        required
                      />
                      <span className="text-sm text-muted-foreground whitespace-nowrap">.forge-itsm.com</span>
                    </div>
                    <p className="text-xs text-muted-foreground">This will be your unique URL to access the system</p>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline" target="_blank">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Selected Plan:</span>
                      <Badge variant="secondary">
                        {plans.find(p => p.id === selectedPlan)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>30-day free trial, then</span>
                      <span className="font-semibold text-foreground">
                        ${plans.find(p => p.id === selectedPlan)?.price}/month
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} disabled={loading} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 gap-2" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          Start Free Trial
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
