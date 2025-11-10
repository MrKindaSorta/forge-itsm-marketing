/**
 * Signup Funnel Tracking Service
 *
 * Tracks user journey from "Get Started" button clicks through
 * signup completion with detailed event logging.
 */

const API_BASE_URL = 'https://forge-itsm.com';
const SESSION_STORAGE_KEY = 'signup_session_id';

export interface TrackEventParams {
  eventType: string;
  pageSource?: string;
  buttonLocation?: string;
  eventData?: Record<string, any>;
}

class SignupTracker {
  private sessionId: string | null = null;
  private eventQueue: TrackEventParams[] = [];

  constructor() {
    // Load existing session ID from localStorage
    if (typeof window !== 'undefined') {
      this.sessionId = localStorage.getItem(SESSION_STORAGE_KEY);
    }
  }

  /**
   * Get or create a session ID for tracking
   */
  private getSessionId(): string {
    if (!this.sessionId) {
      this.sessionId = this.generateSessionId();
      if (typeof window !== 'undefined') {
        localStorage.setItem(SESSION_STORAGE_KEY, this.sessionId);
      }
    }
    return this.sessionId;
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get the current page name from URL
   */
  private getCurrentPage(): string {
    if (typeof window === 'undefined') return 'unknown';

    const pathname = window.location.pathname;

    if (pathname === '/' || pathname === '') return 'Landing';
    if (pathname.startsWith('/pricing')) return 'Pricing';
    if (pathname.startsWith('/features')) return 'Features';
    if (pathname.startsWith('/product-tour')) return 'Product Tour';
    if (pathname.startsWith('/vs-zendesk')) return 'VS Zendesk';
    if (pathname.startsWith('/vs-freshdesk')) return 'VS Freshdesk';
    if (pathname.startsWith('/vs-servicenow')) return 'VS ServiceNow';
    if (pathname.startsWith('/about')) return 'About';
    if (pathname.startsWith('/signup')) return 'Signup';
    if (pathname.startsWith('/contact')) return 'Contact';

    return 'Unknown';
  }

  /**
   * Track a signup funnel event
   */
  async trackEvent(params: TrackEventParams): Promise<void> {
    const sessionId = this.getSessionId();

    // If pageSource not provided, auto-detect it
    if (!params.pageSource) {
      params.pageSource = this.getCurrentPage();
    }

    const payload = {
      sessionId,
      eventType: params.eventType,
      pageSource: params.pageSource,
      buttonLocation: params.buttonLocation,
      eventData: params.eventData
    };

    // Add to queue
    this.eventQueue.push(params);

    // Send the event to the API
    try {
      const response = await fetch(`${API_BASE_URL}/api/analytics/track-event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.error('Failed to track event:', await response.text());
      } else {
        console.log('✅ Event tracked:', params.eventType);
      }
    } catch (error) {
      console.error('Error tracking event:', error);
      // Silently fail - don't interrupt user experience
    }
  }

  /**
   * Track button click event
   */
  async trackButtonClick(buttonLocation: string): Promise<void> {
    await this.trackEvent({
      eventType: 'button_click',
      buttonLocation
    });
  }

  /**
   * Track signup step started
   */
  async trackStepStarted(step: number): Promise<void> {
    await this.trackEvent({
      eventType: `step${step}_started`
    });
  }

  /**
   * Track signup step completed
   */
  async trackStepCompleted(step: number, data?: Record<string, any>): Promise<void> {
    await this.trackEvent({
      eventType: `step${step}_completed`,
      eventData: data
    });
  }

  /**
   * Track Stripe redirect
   */
  async trackStripeRedirect(data: Record<string, any>): Promise<void> {
    await this.trackEvent({
      eventType: 'stripe_redirect',
      eventData: data
    });
  }

  /**
   * Track provisioning completed
   */
  async trackProvisioningCompleted(subdomain: string): Promise<void> {
    await this.trackEvent({
      eventType: 'provisioning_completed',
      eventData: { subdomain }
    });
  }

  /**
   * Track form error
   */
  async trackFormError(errorType: string, errorMessage: string): Promise<void> {
    await this.trackEvent({
      eventType: 'form_error',
      eventData: {
        errorType,
        errorMessage
      }
    });
  }

  /**
   * Clear session (useful for testing or after completion)
   */
  clearSession(): void {
    this.sessionId = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }

  /**
   * Get current session ID (useful for debugging)
   */
  getCurrentSessionId(): string | null {
    return this.sessionId;
  }
}

// Export singleton instance
export const signupTracker = new SignupTracker();

// Export class for testing
export { SignupTracker };
