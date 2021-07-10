import React, {Fragment} from "react";
import Head from "next/head";
// Components
import Header from "../header";

export default class Layout extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Joseph Page!</title>
          <link rel="shortcut icon" href={"favicon.png"} type="image/x-icon"/>
        </Head>
        <div>
          <Header />
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}