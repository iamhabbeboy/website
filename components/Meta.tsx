import Head from "next/head";
import pageConfig from "../utility/pageConfig";
type Props = {
  children: React.ReactNode;
};

const Meta: React.FC<Props> = ({ children }) => {
  const { gtmId } = pageConfig;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {children}
    <link rel="canonical" href="https://abiodunazeez.com" />
    <meta name="google-site-verification" content="1kErviLakDFnKJfNAEod4KVqwEApQC9rxCaIyhAJbEQ" />

    <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Abiodun Azeez" />
      <meta property="og:title" content="Abiodun Azeez - A Software Developer" />
      <meta property="og:description" content="Hello, I'm Abiodun Solomon. A Software Developer that loves solving problems and building cool stuffs." />
      <meta property="og:image" content="https://res.cloudinary.com/denj7z5ec/image/upload/v1620920061/Azeez_Abiodun.png" />  
      <meta property="og:url" content="https://abiodunazeez.com" />

      <meta name="twitter:title" content="Abiodun Azeez - A Software Developer" />
      <meta name="twitter:description" content="Hello, I'm Abiodun Solomon. A Software Developer that loves solving problems and building cool stuffs." />
      <meta name="twitter:image" content="https://res.cloudinary.com/denj7z5ec/image/upload/v1620920061/Azeez_Abiodun.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@abbey__web" />
      <meta name="twitter:creator" content="@abbey__web" />

      <script type='application/ld+json' dangerouslySetInnerHTML = {{ 
          __html: `{
            "@context":"http://schema.org",
            "@type":"WebSite",
            "publisher": {
                  "@type": "Organization",
                  "name": "Abiodun Azeez",
                  "logo": {
                      "@type": "ImageObject",
                      "url": "https://res.cloudinary.com/denj7z5ec/image/upload/v1620920061/Azeez_Abiodun.png",
                      "width": 60,
                      "height": 60
                  }
              },
            "url":"https://abiodunazeez.com/",
            "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://abiodunazeez.com/"
              },
            "description": "Hello, I'm Abiodun Solomon. A Software Developer that loves solving problems and building cool stuffs.",
            "name":"Abiodun Azeez",
            "sameAs":[
              "https://twitter.com/abbey__web/",
              "https://www.instagram.com/abbey__web/"
            ]
          }
          {
             "@context": "http://www.schema.org",
             "@type":"Person",
             "name":"Abiodun Azeez",
             "jobTitle":"Software Developer",
             "description":"Hello, I'm Abiodun Solomon. A Software Developer that loves solving problems and building cool stuffs.":
             "url":"https://abiodunazeez.com/",
             "address":{
                "@type": "PostalAddress",
                "addressLocality":"Lagos",
                "addressRegion":"Lagos",
                "addressCountry":"Nigeria"
             },
             "image":"https://res.cloudinary.com/denj7z5ec/image/upload/v1620920061/Azeez_Abiodun.png",
          }`
         }} />

    <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`} />
      <script
          dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PPTHY6JLE8');`,
          }}
      />
      <noscript
          dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
      />
    </Head>
  );
};

export default Meta;
