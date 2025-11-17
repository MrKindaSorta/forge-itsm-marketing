import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { signupTracker } from '@/lib/signupTracker';
import { PLANS, OVERAGE_FEE, FREE_TRIAL_DAYS, formatPrice } from '@/config/pricing';

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
      id: PLANS.free.id,
      name: PLANS.free.name,
      price: PLANS.free.monthlyPrice,
      agents: PLANS.free.includedAgents,
      features: ['Up to 2 Agents', 'Unlimited End Users', 'Unlimited Tickets', 'All Features', 'Community Support'],
      badge: 'No Credit Card'
    },
    {
      id: PLANS.paid.id,
      name: PLANS.paid.name,
      price: PLANS.paid.monthlyPrice,
      agents: PLANS.paid.includedAgents,
      popular: true,
      features: ['3 Agents Included', `${formatPrice(OVERAGE_FEE)}/additional agent`, 'Unlimited End Users', 'Unlimited Tickets', 'All Features', 'Priority Support'],
      badge: '30-Day Free Trial'
    }
  ];

  // Track step changes
  useEffect(() => {
    if (step === 1) {
      signupTracker.trackStepStarted(1);
    } else if (step === 2) {
      signupTracker.trackStepCompleted(1, { plan: selectedPlan });
      signupTracker.trackStepStarted(2);
    } else if (step === 3) {
      signupTracker.trackStepCompleted(2, { email: formData.email });
      signupTracker.trackStepStarted(3);
    }
  }, [step, selectedPlan, formData.email]);

  // Password validation function
  const validatePassword = (password: string): string | null => {
    if (password.length < 12) {
      return 'Password must be at least 12 characters';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      return 'Password must contain at least one special character (!@#$%^&*)';
    }
    return null;
  };

  // Real-time password strength checker
  const passwordRequirements = useMemo(() => {
    const password = formData.password;
    return [
      {
        label: 'At least 12 characters',
        met: password.length >= 12,
      },
      {
        label: 'Contains uppercase letter (A-Z)',
        met: /[A-Z]/.test(password),
      },
      {
        label: 'Contains lowercase letter (a-z)',
        met: /[a-z]/.test(password),
      },
      {
        label: 'Contains number (0-9)',
        met: /[0-9]/.test(password),
      },
      {
        label: 'Contains special character (!@#$%^&*)',
        met: /[^a-zA-Z0-9]/.test(password),
      },
    ];
  }, [formData.password]);

  // Hash password using Web Crypto API
  const hashPasswordForTransport = async (password: string): Promise<{ hash: string; salt: string }> => {
    // Generate salt
    const saltBuffer = crypto.getRandomValues(new Uint8Array(16));
    const salt = btoa(String.fromCharCode(...saltBuffer));

    // Hash password using PBKDF2
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveBits']
    );

    const derivedKey = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: Uint8Array.from(atob(salt), c => c.charCodeAt(0)),
        iterations: 100000,
        hash: 'SHA-256'
      },
      keyMaterial,
      512
    );

    const hash = btoa(String.fromCharCode(...new Uint8Array(derivedKey)));

    return { hash, salt };
  };

  // Handle final form submission and Stripe checkout
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      // Validate password strength
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        setError(passwordError);
        setLoading(false);
        return;
      }

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

      // Hash password before sending
      const { hash, salt } = await hashPasswordForTransport(formData.password);

      // Create Stripe checkout session or provision directly for Free plan
      const sessionResponse = await fetch('https://itsm-backend.joshua-r-klimek.workers.dev/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          subdomain: formData.subdomain,
          email: formData.email,
          passwordHash: hash,
          passwordSalt: salt,
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
        }),
      });

      const responseData = await sessionResponse.json();
      const { url, success, subdomain: provisionedSubdomain, redirectUrl, error: sessionError } = responseData;

      if (sessionError) {
        setError(sessionError);
        setLoading(false);
        return;
      }

      // Track step 3 completion
      await signupTracker.trackStepCompleted(3, {
        subdomain: formData.subdomain,
        companyName: formData.companyName,
        plan: selectedPlan
      });

      // Handle Free plan (provisioned immediately)
      if (selectedPlan === 'free' && success && redirectUrl) {
        await signupTracker.trackSignupCompleted({
          subdomain: provisionedSubdomain || formData.subdomain,
          plan: 'free',
          method: 'direct_provision'
        });
        // Redirect directly to tenant subdomain
        window.location.href = redirectUrl;
        return;
      }

      // Handle Paid plan (redirect to Stripe)
      if (url) {
        await signupTracker.trackStripeRedirect({
          subdomain: formData.subdomain,
          plan: selectedPlan
        });
        window.location.href = url;
      } else {
        setError('Failed to complete signup');
        await signupTracker.trackFormError('signup_failed', 'No URL or redirect provided');
        setLoading(false);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError('An unexpected error occurred. Please try again.');
      await signupTracker.trackFormError('checkout_exception', errorMessage);
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
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step >= 1 ? 'border-primary bg-primary text-primary-foreground shadow-lg glow-primary' : 'border-border'}`}>
                  {step > 1 ? <Check className="h-4 w-4" /> : '1'}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Choose Plan</span>
              </div>
              <div className={`h-0.5 w-12 transition-all ${step >= 2 ? 'bg-primary' : 'bg-border'}`} />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step >= 2 ? 'border-primary bg-primary text-primary-foreground shadow-lg glow-primary' : 'border-border'}`}>
                  {step > 2 ? <Check className="h-4 w-4" /> : '2'}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Account Info</span>
              </div>
              <div className={`h-0.5 w-12 transition-all ${step >= 3 ? 'bg-primary' : 'bg-border'}`} />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step >= 3 ? 'border-primary bg-primary text-primary-foreground shadow-lg glow-primary' : 'border-border'}`}>
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
                <p className="text-muted-foreground">Start free, or try Professional with a {FREE_TRIAL_DAYS}-day free trial.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative cursor-pointer transition-all glass-card ${
                      selectedPlan === plan.id
                        ? 'border-2 border-primary glow-primary scale-105'
                        : 'hover:scale-102 hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-primary/80 shadow-lg">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>
                        <div className="text-3xl font-bold text-foreground mt-2">
                          {plan.price === 0 ? '$0' : formatPrice(plan.price)}
                        </div>
                        <div className="text-sm">/month {plan.price === 0 && 'forever'}</div>
                        {plan.badge && (
                          <Badge variant="secondary" className="mt-2">
                            {plan.badge}
                          </Badge>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
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
            <Card className="glass-card">
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
                    {/* Password strength indicator */}
                    {formData.password && (
                      <div className="space-y-2 pt-2 pb-1">
                        {passwordRequirements.map((req, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-2 text-xs transition-colors ${
                              req.met ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'
                            }`}
                          >
                            {req.met ? (
                              <Check className="h-3.5 w-3.5 flex-shrink-0" />
                            ) : (
                              <X className="h-3.5 w-3.5 flex-shrink-0 opacity-50" />
                            )}
                            <span className={req.met ? 'font-medium' : ''}>{req.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {!formData.password && (
                      <p className="text-xs text-muted-foreground">At least 12 characters with uppercase, lowercase, numbers, and special characters</p>
                    )}
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
            <Card className="glass-card">
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
                      <span>{FREE_TRIAL_DAYS}-day free trial, then</span>
                      <span className="font-semibold text-foreground">
                        {formatPrice(plans.find(p => p.id === selectedPlan)?.price || 0)}/month
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
