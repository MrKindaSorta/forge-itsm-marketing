import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProvisioningStatus = 'pending' | 'in_progress' | 'completed' | 'failed';

interface ProvisioningStep {
  message: string;
  completed: boolean;
}

export default function Success() {
  const [searchParams] = useSearchParams();
  const subdomain = searchParams.get('subdomain');
  const [status, setStatus] = useState<ProvisioningStatus>('pending');
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState('');
  const [redirecting, setRedirecting] = useState(false);

  const steps: ProvisioningStep[] = [
    { message: 'Initializing your ITSM environment...', completed: false },
    { message: 'Provisioning dedicated database instance...', completed: false },
    { message: 'Configuring security policies and encryption...', completed: false },
    { message: 'Deploying application infrastructure...', completed: false },
    { message: 'Setting up admin account and permissions...', completed: false },
    { message: 'Finalizing deployment and running health checks...', completed: false },
  ];

  const [progressSteps, setProgressSteps] = useState(steps);

  useEffect(() => {
    if (!subdomain) {
      setError('No subdomain provided');
      setStatus('failed');
      return;
    }

    // Simulate step progression for visual effect
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          setProgressSteps((prevSteps) => {
            const newSteps = [...prevSteps];
            if (newSteps[prev]) {
              newSteps[prev].completed = true;
            }
            return newSteps;
          });
          return prev + 1;
        }
        return prev;
      });
    }, 5000); // Each step takes 5 seconds

    // Poll provisioning status
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(
          `https://itsm-backend.joshua-r-klimek.workers.dev/api/provision/status/${subdomain}`
        );
        const data = await response.json();

        if (data.status === 'completed') {
          setStatus('completed');
          clearInterval(pollInterval);
          clearInterval(stepInterval);

          // Mark all steps as completed
          setProgressSteps(steps.map(step => ({ ...step, completed: true })));

          // Wait 2 seconds then redirect
          setTimeout(() => {
            setRedirecting(true);
            window.location.href = `https://${subdomain}.forge-itsm.com`;
          }, 2000);
        } else if (data.status === 'failed') {
          setStatus('failed');
          setError(data.error || 'Provisioning failed');
          clearInterval(pollInterval);
          clearInterval(stepInterval);
        } else if (data.status === 'in_progress') {
          setStatus('in_progress');
        }
      } catch (err) {
        console.error('Error polling status:', err);
      }
    }, 3000); // Poll every 3 seconds

    return () => {
      clearInterval(pollInterval);
      clearInterval(stepInterval);
    };
  }, [subdomain]);

  if (!subdomain) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex items-center gap-3 text-destructive">
              <AlertCircle className="h-6 w-6" />
              <CardTitle>Error</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Invalid signup session. Please try again.</p>
            <Button className="w-full mt-4" onClick={() => window.location.href = '/signup'}>
              Back to Signup
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          {status === 'completed' ? (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-3xl">Welcome to Forge ITSM!</CardTitle>
              <CardDescription className="text-lg">
                Your account has been successfully provisioned
              </CardDescription>
            </>
          ) : status === 'failed' ? (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-3xl">Provisioning Failed</CardTitle>
              <CardDescription className="text-lg text-destructive">
                {error}
              </CardDescription>
            </>
          ) : (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
              <CardTitle className="text-3xl">Setting Up Your Account</CardTitle>
              <CardDescription className="text-lg">
                Please wait while we provision your dedicated ITSM instance
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {status !== 'failed' && (
            <div className="space-y-4">
              {progressSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-opacity duration-500 ${
                    index <= currentStep ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className="mt-0.5">
                    {step.completed ? (
                      <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                    ) : index === currentStep ? (
                      <Loader2 className="h-6 w-6 text-primary animate-spin" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      step.completed ? 'text-green-600 dark:text-green-400' :
                      index === currentStep ? 'text-foreground' :
                      'text-muted-foreground'
                    }`}>
                      {step.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {status === 'completed' && !redirecting && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-sm text-green-800 dark:text-green-200 text-center">
                Redirecting you to your instance at <span className="font-semibold">{subdomain}.forge-itsm.com</span>...
              </p>
            </div>
          )}

          {status === 'failed' && (
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-sm text-red-800 dark:text-red-200">
                  We encountered an issue during provisioning. Our team has been notified and will resolve this shortly.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Support
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
            </div>
          )}

          {status === 'pending' || status === 'in_progress' ? (
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                This usually takes 30-60 seconds. Please don't close this window.
              </p>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
