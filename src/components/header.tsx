import React from "react";

interface HeaderProps {
  title?: String
}

class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <header className={'header'}>
        <span className={'logo'}>{this.props.title || '<Joseph Page/>'}</span>
        <nav className={'navbar'}>
          <ul>
            <li className={'navbar-item'}>Post</li>
            <li className={'navbar-item'}>Projects</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;