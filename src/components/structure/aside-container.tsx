import React from "react";
import Hamburger from "../hamburger";

interface IProps {
  position: String
}

export default class AsideContainer extends React.Component<IProps, any> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      activeMenu: false
    }
  }

  public openMenu = () => {
    this.setState(({activeMenu}) => ({activeMenu: !activeMenu}))
  }

  render() {
    return (
      <aside className={'aside-container'}>
        <div className={this.props.position == 'left' ? "aside-left" : "aside-right"}>
          <div className="container">
            {this.props.position == 'left' ?
              <Hamburger active={this.state.activeMenu} toggleActive={this.openMenu}/> : ''
            }
          </div>
        </div>
      </aside>
    )
  }
}