/**
 * Page Visit Tracking Hook
 *
 * Automatically tracks page visits with unique visitor counting.
 * Generates and persists visitor_id in localStorage.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = 'https://forge-itsm.com';
const VISITOR_ID_KEY = 'visitor_id';
const SESSION_ID_KEY = 'signup_session_id';

/**
 * Get or create a unique visitor ID
 */
function getVisitorId(): string {
  if (typeof window === 'undefined') return '';

  let visitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  return visitorId;
}

/**
 * Get signup session ID if it exists (to link page visits to signup funnel)
 */
function getSessionId(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(SESSION_ID_KEY);
}

/**
 * Map URL pathname to page name
 */
function getPageName(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'Landing';
  if (pathname.startsWith('/pricing')) return 'Pricing';
  if (pathname.startsWith('/features')) return 'Features';
  if (pathname.startsWith('/product-tour')) return 'Product Tour';
  if (pathname.startsWith('/vs-zendesk')) return 'VS Zendesk';
  if (pathname.startsWith('/vs-freshdesk')) return 'VS Freshdesk';
  if (pathname.startsWith('/vs-servicenow')) return 'VS ServiceNow';
  if (pathname.startsWith('/about')) return 'About';
  if (pathname.startsWith('/contact')) return 'Contact';
  if (pathname.startsWith('/signup')) return 'Signup';
  return 'Other';
}

/**
 * Track a page visit
 */
async function trackPageView(pageName: string): Promise<void> {
  const visitorId = getVisitorId();
  const sessionId = getSessionId();

  if (!visitorId) return;

  try {
    await fetch(`${API_BASE_URL}/api/analytics/track-pageview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageName,
        visitorId,
        sessionId
      })
    });
  } catch (error) {
    console.error('Error tracking page visit:', error);
    // Silently fail - don't interrupt user experience
  }
}

/**
 * Hook that automatically tracks page visits on route changes
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pageName = getPageName(location.pathname);

    // Track the page visit
    trackPageView(pageName);
  }, [location.pathname]);
}
