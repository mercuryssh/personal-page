import React, {Fragment} from "react";
import Head from "next/head";
// Components
import Header from "../header";
import AsideContainer from "./aside-container";

export default class Layout extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Joseph Page!</title>
          <link rel='shortcut icon' href={'favicon.png'} type='image/x-icon'/>
        </Head>
        <div className={'layout'}>
          <AsideContainer position={'left'}/>
          <div className={'body-content'}>
            <Header/>
            {this.props.children}
          </div>
          <AsideContainer position={'right'}/>
        </div>
      </Fragment>
    )
  }
}