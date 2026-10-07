/**
 * Smart Email Dispatcher Utility
 * 
 * - On Desktop: Opens Gmail Web Compose in a new browser tab (https://mail.google.com/mail/?view=cm...).
 * - On Mobile & Tablet (Android, iPhone, iPad): Directly triggers the native Gmail app / default email app
 *   via the standard `mailto:` protocol, preventing unwanted redirection to Gmail on Chrome browser.
 */

/**
 * Detects whether the current device is a mobile phone or tablet.
 * Accurately handles Android phones/tablets, iPhones, iPads, and iPadOS 13+ (which reports as MacIntel with touch).
 */
export function isMobileOrTablet() {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent || navigator.vendor || window.opera || '';

  // 1. Android devices (both phones and tablets)
  if (/android/i.test(ua)) {
    return true;
  }

  // 2. iOS devices (iPhone, iPod, legacy iPad)
  if (/iPad|iPhone|iPod/i.test(ua)) {
    return true;
  }

  // 3. iPadOS 13+ detection (reports as MacIntel with multiple touch points)
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
    return true;
  }

  // 4. Other mobile/tablet browser identifiers
  if (/mobile|tablet|iemobile|opera mini|blackberry/i.test(ua)) {
    return true;
  }

  // 5. Coarse touch pointer with mobile/tablet screen width
  if (typeof window.matchMedia === 'function') {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse && window.innerWidth <= 1180) {
      return true;
    }
  }

  return false;
}

/**
 * Builds the appropriate href URL for an email link based on the client device.
 * 
 * @param {Object} options
 * @param {string} options.email - Destination email address
 * @param {string} [options.subject] - Pre-filled email subject
 * @param {string} [options.body] - Pre-filled email body
 * @returns {string} The computed URL (mailto: on mobile/tablet, Gmail web URL on desktop)
 */
export function getEmailLink({ email, subject = '', body = '' }) {
  if (!email) return '#';

  const encodedEmail = encodeURIComponent(email);
  const encodedSubject = subject ? encodeURIComponent(subject) : '';
  const encodedBody = body ? encodeURIComponent(body) : '';

  // On Mobile or Tablet: Return native mailto: scheme to launch the Gmail app
  if (isMobileOrTablet()) {
    const queryParts = [];
    if (encodedSubject) queryParts.push(`subject=${encodedSubject}`);
    if (encodedBody) queryParts.push(`body=${encodedBody}`);
    const query = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
    return `mailto:${email}${query}`;
  }

  // On Desktop: Return Gmail Web compose URL
  const queryParts = ['view=cm', 'fs=1', `to=${encodedEmail}`];
  if (encodedSubject) queryParts.push(`su=${encodedSubject}`);
  if (encodedBody) queryParts.push(`body=${encodedBody}`);
  return `https://mail.google.com/mail/?${queryParts.join('&')}`;
}

/**
 * Handles email link clicks dynamically.
 * Ensures mobile/tablet devices launch the native Gmail/email application directly,
 * while desktop browsers open Gmail Web compose in a new tab.
 * 
 * @param {MouseEvent} event - The click event
 * @param {Object} options
 * @param {string} options.email - Destination email address
 * @param {string} [options.subject] - Pre-filled email subject
 * @param {string} [options.body] - Pre-filled email body
 */
export function handleEmailClick(event, { email, subject = '', body = '' }) {
  if (!email) return;

  const isMobile = isMobileOrTablet();

  if (isMobile) {
    // Prevent default navigation to avoid blank tabs or browser redirects
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const queryParts = [];
    if (subject) queryParts.push(`subject=${encodeURIComponent(subject)}`);
    if (body) queryParts.push(`body=${encodeURIComponent(body)}`);
    const query = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
    
    // Launch the Gmail / native mail app directly via mailto:
    window.location.href = `mailto:${email}${query}`;
  } else {
    // Desktop: Open Gmail Web compose in a new window/tab
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const queryParts = ['view=cm', 'fs=1', `to=${encodeURIComponent(email)}`];
    if (subject) queryParts.push(`su=${encodeURIComponent(subject)}`);
    if (body) queryParts.push(`body=${encodeURIComponent(body)}`);
    const gmailUrl = `https://mail.google.com/mail/?${queryParts.join('&')}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  }
}
