import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { MotionProvider } from './components/motion/MotionProvider';
import { CustomCursor } from './components/motion/CustomCursor';
import { Preloader } from './components/motion/Preloader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import HomePage from './pages/HomePage';

// Lazy loaded secondary pages for modular code-splitting
const DDoSProtectionPage = React.lazy(() => import('./pages/DDoSProtectionPage'));
const IPTransitPage = React.lazy(() => import('./pages/IPTransitPage'));
const IXConnectivityPage = React.lazy(() => import('./pages/IXConnectivityPage'));
const LeasedLinesPage = React.lazy(() => import('./pages/LeasedLinesPage'));
const NetworkLocationsPage = React.lazy(() => import('./pages/NetworkLocationsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Fast route transition spinner placeholder
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#DB2777]/30 border-t-[#DB2777] animate-spin" />
    </div>
  );
}

const pageTitles: Record<PageRoute, string> = {
  '/': 'AXTRO NETWORKS — The Axis of Internet',
  '/services/ddos-protection': 'DDoS Protection | AXTRO NETWORKS',
  '/services/ip-transit': 'IP Transit | AXTRO NETWORKS',
  '/services/ix-connectivity': 'IX Connectivity | AXTRO NETWORKS',
  '/services/leased-lines': 'Leased Lines | AXTRO NETWORKS',
  '/network': 'Network & Locations | AXTRO NETWORKS',
  '/about': 'About AXTRO NETWORKS',
  '/contact': 'Get Connected | AXTRO NETWORKS',
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname as PageRoute;
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (hash && hash in pageTitles) return hash;
      if (path in pageTitles) return path;
    }
    return '/';
  });

  useEffect(() => {
    // Update document title dynamically
    document.title = pageTitles[currentRoute] || 'AXTRO NETWORKS — The Axis of Internet';

    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (hash && hash in pageTitles) {
        setCurrentRoute(hash);
      } else if (path in pageTitles) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentRoute]);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch (e) {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentRoute === '/') {
      return <HomePage navigate={navigate} />;
    }

    return (
      <React.Suspense fallback={<PageLoader />}>
        {(() => {
          switch (currentRoute) {
            case '/services/ddos-protection':
              return <DDoSProtectionPage navigate={navigate} />;
            case '/services/ip-transit':
              return <IPTransitPage navigate={navigate} />;
            case '/services/ix-connectivity':
              return <IXConnectivityPage navigate={navigate} />;
            case '/services/leased-lines':
              return <LeasedLinesPage navigate={navigate} />;
            case '/network':
              return <NetworkLocationsPage navigate={navigate} />;
            case '/about':
              return <AboutPage navigate={navigate} />;
            case '/contact':
              return <ContactPage navigate={navigate} />;
            default:
              return <HomePage navigate={navigate} />;
          }
        })()}
      </React.Suspense>
    );
  };

  return (
    <ThemeProvider>
      <MotionProvider>
        {/* Fast High-Tech Preloader Sequence */}
        <Preloader />

        {/* Desktop Dynamic Custom Cursor */}
        <CustomCursor />

        <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-['Inter',sans-serif] selection:bg-[#DB2777] selection:text-white transition-colors duration-200">
          {/* Sticky Global Navigation */}
          <Navigation currentRoute={currentRoute} navigate={navigate} />

          {/* Main Page Content */}
          <main className="flex-1">
            {renderPage()}
          </main>

          {/* Global Footer */}
          <Footer navigate={navigate} />
        </div>
      </MotionProvider>
    </ThemeProvider>
  );
}
