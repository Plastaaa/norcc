import '../styles/globals.css'
import ReactGA from 'react-ga';
import React from 'react';

const TRACKING_ID = "UA-155362359-37"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Tidio = React.lazy(() => import('../components/tidio'));
const ScriptImport = React.lazy(() => import('../components/scriptImport'))

function MyApp({ Component, pageProps }) {  
  var analyticsCode="G-Q0H7C22TWQ"

  return <>
  {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${analyticsCode}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsCode}', {
        page_path: window.location.pathname,
      });
    `,
      }}
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    
    {
      <Component {...pageProps}/>
    }
    {<div>
      <Tidio>
      </Tidio>
    </div>
    }
  </>
}

export default MyApp