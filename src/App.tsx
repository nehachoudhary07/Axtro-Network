import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { MotionProvider } from './components/motion/MotionProvider';
import { CustomCursor } from './components/motion/CustomCursor';
import { Preloader } from './components/motion/Preloader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { DDoSProtectionPage } from './pages/DDoSProtectionPage';
import { IPTransitPage } from './pages/IPTransitPage';
import { IXConnectivityPage } from './pages/IXConnectivityPage';
import { LeasedLinesPage } from './pages/LeasedLinesPage';
import { NetworkLocationsPage } from './pages/NetworkLocationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

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
    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;
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
