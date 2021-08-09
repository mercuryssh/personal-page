import React from "react";
import Head from "next/head";
import '../styles/globals.sass';

function MyApp({Component, pageProps}) {
  return (
      <>
        <Head>
          <title>Joseph Page!</title>
          <link rel='shortcut icon' href={'/favicon.png'} type='image/x-icon'/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
