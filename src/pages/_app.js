import React from "react";
import Head from "next/head";
import '../styles/globals.sass';

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>Joseph Page!</title>
        <link rel='shortcut icon' href={'/favicon.ico'} type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
