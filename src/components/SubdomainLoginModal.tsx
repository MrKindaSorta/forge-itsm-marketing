import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, HelpCircle, AlertCircle } from 'lucide-react';

interface SubdomainLoginModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const LAST_SUBDOMAIN_KEY = 'forge_last_subdomain';

export default function SubdomainLoginModal({ children, open: controlledOpen, onOpenChange: controlledOnOpenChange }: SubdomainLoginModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled props if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledOnOpenChange || setInternalOpen;
  const [subdomain, setSubdomain] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Load last used subdomain from localStorage
  useEffect(() => {
    if (open) {
      try {
        const lastSubdomain = localStorage.getItem(LAST_SUBDOMAIN_KEY);
        if (lastSubdomain) {
          setSubdomain(lastSubdomain);
        }
      } catch {
        // localStorage might not be available
      }
    }
  }, [open]);

  // Sanitize subdomain input (lowercase, alphanumeric + hyphens only)
  const handleSubdomainChange = (value: string) => {
    const sanitized = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setSubdomain(sanitized);
    setError('');
  };

  // Validate subdomain format
  const isValidSubdomain = (value: string): boolean => {
    if (!value || value.length < 2) return false;
    if (value.startsWith('-') || value.endsWith('-')) return false;
    if (/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(value) || /^[a-z0-9]$/.test(value)) return true;
    return false;
  };

  const handleContinue = async () => {
    if (!isValidSubdomain(subdomain)) {
      setError('Please enter a valid company identifier (2+ characters, letters, numbers, and hyphens only)');
      return;
    }

    setIsValidating(true);
    setError('');

    try {
      // Optional: Verify subdomain exists before redirecting
      const response = await fetch(`https://itsm-backend.joshua-r-klimek.workers.dev/api/public/verify-subdomain?subdomain=${subdomain}`);
      const data = await response.json();

      if (!data.exists) {
        setError(`No workspace found with identifier "${subdomain}". Please check with your IT administrator.`);
        setIsValidating(false);
        return;
      }

      // Save to localStorage for next time
      try {
        localStorage.setItem(LAST_SUBDOMAIN_KEY, subdomain);
      } catch {
        // Ignore localStorage errors
      }

      // Redirect to tenant login page
      window.location.href = `https://${subdomain}.forge-itsm.com/auth/login`;
    } catch (err) {
      // If verification endpoint doesn't exist or fails, just redirect anyway
      console.warn('Subdomain verification failed, redirecting anyway:', err);

      try {
        localStorage.setItem(LAST_SUBDOMAIN_KEY, subdomain);
      } catch {
        // Ignore
      }

      window.location.href = `https://${subdomain}.forge-itsm.com/auth/login`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isValidSubdomain(subdomain)) {
      handleContinue();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In to Your Workspace</DialogTitle>
          <DialogDescription>
            Enter your company identifier to access your Forge ITSM workspace
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Subdomain Input */}
          <div className="space-y-2">
            <Label htmlFor="subdomain" className="flex items-center gap-2">
              Company Identifier
              <div className="group relative">
                <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-popover text-popover-foreground text-xs rounded-md shadow-md border z-50">
                  This is the unique identifier your IT team created for your organization
                </div>
              </div>
            </Label>
            <Input
              id="subdomain"
              placeholder="e.g., acme, contoso, mycompany"
              value={subdomain}
              onChange={(e) => handleSubdomainChange(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isValidating}
              className={error ? 'border-destructive' : ''}
              autoComplete="off"
              autoFocus
            />
          </div>

          {/* Live URL Preview */}
          <div className="rounded-lg border bg-muted/50 p-3">
            <div className="text-xs text-muted-foreground mb-1">Your workspace URL:</div>
            <div className={`text-sm font-mono ${subdomain && isValidSubdomain(subdomain) ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              {subdomain || 'your-company'}.forge-itsm.com
            </div>
          </div>

          {/* Examples */}
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Examples:</span> acme, contoso, mycompany, techcorp
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Help Text */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800">
            <HelpCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="font-medium text-blue-900 dark:text-blue-100 mb-1">Don't know your identifier?</div>
              <div className="text-blue-700 dark:text-blue-300">
                Contact your IT administrator or team admin for help. They can provide your organization's workspace identifier.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isValidating}
          >
            Cancel
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!isValidSubdomain(subdomain) || isValidating}
            className="gap-2"
          >
            {isValidating ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                Verifying...
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
