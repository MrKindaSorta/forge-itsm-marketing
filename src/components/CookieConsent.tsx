import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('ga-consent');
    if (consentGiven === null) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    // Store consent in localStorage
    localStorage.setItem('ga-consent', 'true');

    // Update Google Analytics consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    setIsVisible(false);
  };

  const handleDecline = () => {
    // Store decline in localStorage
    localStorage.setItem('ga-consent', 'false');

    // Ensure analytics remains denied
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      <Card className="m-4 p-6 max-w-2xl w-full bg-white shadow-2xl border-2 border-gray-200 pointer-events-auto animate-slide-up">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Cookie className="h-6 w-6 text-blue-600" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              We value your privacy
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies and analytics to improve your experience on our website.
              This helps us understand how visitors use our site and make improvements.
              Your data is anonymized and we never sell your information.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              By clicking "Accept", you consent to our use of cookies and analytics.
              You can change your preferences at any time.
              Learn more in our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Decline
              </Button>
            </div>
          </div>

          <button
            onClick={handleDecline}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}
