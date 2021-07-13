import React from "react";
import FullScreenContainer from "./fullScreenContainer";
import Link from "next/link";

interface MenuProps {
  visible: Boolean
}

class DropdownMenu extends React.Component<MenuProps, any> {

  render() {
    return (
      <div className={'dropdown-menu' + (this.props.visible ? ' dropdown-menu-active' : '')}>
        <FullScreenContainer>
          <ul className={'navigation-menu'}>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
          </ul>
        </FullScreenContainer>
      </div>
    )
  }
}

export default DropdownMenu;