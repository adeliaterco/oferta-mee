// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log(`[GA4] Event: ${eventName}`, params);
  }
};

// Funnel Events
export const trackLandingView = () => {
  trackEvent('landing_page_view', {
    event_category: 'funnel',
    event_label: 'Landing Page'
  });
};

export const trackQuizStart = () => {
  trackEvent('quiz_start', {
    event_category: 'funnel',
    event_label: 'Quiz Started'
  });
};

export const trackQuestionView = (questionNumber: number, totalQuestions: number) => {
  trackEvent('question_view', {
    event_category: 'quiz',
    event_label: `Question ${questionNumber}`,
    question_number: questionNumber,
    total_questions: totalQuestions,
    progress_percent: Math.round((questionNumber / totalQuestions) * 100)
  });
};

export const trackQuestionAnswer = (questionNumber: number, answerId: string) => {
  trackEvent('question_answer', {
    event_category: 'quiz',
    event_label: `Question ${questionNumber} Answered`,
    question_number: questionNumber,
    answer_id: answerId
  });
};

export const trackQuizComplete = () => {
  trackEvent('quiz_complete', {
    event_category: 'funnel',
    event_label: 'Quiz Completed'
  });
};

export const trackAnalysisView = () => {
  trackEvent('analysis_view', {
    event_category: 'funnel',
    event_label: 'Analysis Screen'
  });
};

export const trackResultsView = (q8Answer: string) => {
  trackEvent('results_view', {
    event_category: 'funnel',
    event_label: 'Results Page',
    personalization_type: q8Answer
  });
};

export const trackCtaClick = (ctaLocation: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: ctaLocation
  });
};

export const trackCheckoutRedirect = () => {
  trackEvent('checkout_redirect', {
    event_category: 'conversion',
    event_label: 'Redirected to Checkout'
  });
};

// Page Exit Tracking
export const trackPageExit = (pageName: string, timeSpent: number) => {
  trackEvent('page_exit', {
    event_category: 'engagement',
    event_label: pageName,
    time_spent_seconds: Math.round(timeSpent / 1000)
  });
};
