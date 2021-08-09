import React from "react";
import FullScreenContainer from "../components/structure/fullScreenContainer";
import Head from "next/head";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <Head>
        <title>
          page not found
        </title>
      </Head>
      <FullScreenContainer>
        <img width={"300px"} height={"300px"} src={'/notFound.jpg'} alt=""/>
        <p style={{textAlign: "center", margin: "1em", fontSize: "1.2rem"}}>404 Error | page not found</p>
        <Link href={'/'}>
          <span className={'link'} style={{textAlign: "center",display:"block"}}>Go back to home page</span>
        </Link>
      </FullScreenContainer>
    </>
  )
}