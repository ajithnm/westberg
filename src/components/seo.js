import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
      {/* <meta name="viewport" content="min-width=1440"/> */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
	   <title>Westberg International</title>  
      
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      /> */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.svg"
      />
      {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c344b" /> */}
      <meta property="og:title" content="Westberg International" />
      <meta
        property="og:description"
        content="Westberg International online courses."
      />
      <meta
        property="og:image"
        content=""
      /> 
      {/* need social image  */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:url" content="https://www.westberginternational.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-title" content="Westberg International" />
      <meta name="application-name" content="Westberg Internationa" />
      <meta name="msapplication-TileColor" content="#0c344b" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Westberg International online courses."
      />
    </Helmet>
  )
}

export default SEO
