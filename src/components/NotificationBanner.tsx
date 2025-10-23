import React, { useEffect, useState } from 'react';
import styles from './NotificationBanner.module.css';

// Microsoft Clarity Analytics
declare global {
  interface Window {
    clarity: (action: string, ...args: any[]) => void;
  }
}

const NotificationBanner: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Initialize Microsoft Clarity
  useEffect(() => {
    // Load Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "tuq2r37epx");
    `;
    document.head.appendChild(script);

    // Track banner view
    if (window.clarity) {
      window.clarity('event', 'notification_banner_viewed');
    }
  }, []);

  // Detect scroll event to hide the banner
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // You can adjust the scroll value here
        setIsScrolled(true);
        // Track banner dismissal
        if (window.clarity) {
          window.clarity('event', 'notification_banner_dismissed');
        }
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    !isScrolled && (
      <div className={styles.banner}>
        <p>This is not the official documentation of Dagster. Created for <a style={{color: 'blue'}} href='https://www.youtube.com/@shantanukhond'>youtube.com/@shantanukhond</a> </p>
      </div>
    )
  );
};

export default NotificationBanner;
