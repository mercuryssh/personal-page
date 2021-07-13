import React, {Fragment} from "react";
import Head from "next/head";
// Components
import Header from "../header";
import AsideContainer from "./aside-container";
import DropdownMenu from "./dropdownMenu";

interface LayoutState {
  menuVisible: Boolean
}

export default class Layout extends React.Component<any, LayoutState> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuVisible: false
    }
  }

  public toggleMenu = (): void => {
    this.setState(({menuVisible}) => ({menuVisible: !menuVisible}))
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Joseph Page!</title>
          <link rel='shortcut icon' href={'favicon.png'} type='image/x-icon'/>
        </Head>
        <DropdownMenu visible={this.state.menuVisible}/>
        <div id={'layout'}>
          <AsideContainer position={'left'} setMenu={this.toggleMenu}/>
          <div className={'body-content'}>
            <Header/>
            {this.props.children}
          </div>
          <AsideContainer position={'right'} setMenu={() => {}}/>
        </div>
      </Fragment>
    )
  }
}