import React from "react";

interface IProps {
  side: String,
  menuActive: Boolean
}

export default class AsideContainer extends React.Component<IProps, any> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      activeMenu: false
    }
  }

  render() {
    return (
      <aside
        className={'aside-container ' + (this.props.menuActive ? 'active ' : ' ') + (this.props.side == 'left' ? 'aside-left ' : 'aside-right ')}>
        {this.props.children}
      </aside>
    )
  }
}