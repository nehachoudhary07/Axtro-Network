import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ThemeProvider } from './context/ThemeContext';
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
  '/': 'AXTRO NETWORK — The Axis of the Internet',
  '/services/ddos-protection': 'DDoS Protection | AXTRO NETWORK',
  '/services/ip-transit': 'IP Transit | AXTRO NETWORK',
  '/services/ix-connectivity': 'IX Connectivity | AXTRO NETWORK',
  '/services/leased-lines': 'Leased Lines | AXTRO NETWORK',
  '/network': 'Network & Locations | AXTRO NETWORK',
  '/about': 'About AXTRO NETWORK',
  '/contact': 'Get Connected | AXTRO NETWORK',
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
    document.title = pageTitles[currentRoute] || 'AXTRO NETWORK — The Axis of the Internet';

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
      <div className="min-h-screen flex flex-col bg-[#030507] text-[#F5F7FA] font-['Inter',sans-serif] selection:bg-[#164B8C] selection:text-white transition-colors duration-200">
        {/* Sticky Global Navigation */}
        <Navigation currentRoute={currentRoute} navigate={navigate} />

        {/* Main Page Content */}
        <main className="flex-1">
          {renderPage()}
        </main>

        {/* Global Footer */}
        <Footer navigate={navigate} />
      </div>
    </ThemeProvider>
  );
}
