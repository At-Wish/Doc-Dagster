import React, { PropsWithChildren } from 'react';
import Head from '@docusaurus/Head';
import NotificationBanner from '../components/NotificationBanner'; // Import the banner component

const Root: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      {/* Add the banner at the top */}
      <NotificationBanner />
      
      <Head>
        {/* Microsoft Clarity Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tunyy8c63e");
            `,
          }}
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {children}
    </>
  );
};

export default Root;
