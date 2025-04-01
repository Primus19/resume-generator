// This file ensures global CSS is properly loaded in static exports
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function StyleFix({ children }) {
  const router = useRouter();
  
  useEffect(() => {
    // Force a re-render of styles when route changes
    const handleRouteChange = () => {
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('href', href.includes('?') ? href : `${href}?reload=${Date.now()}`);
        }
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <>{children}</>;
}
