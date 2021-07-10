import React from "react";
import styles from '../styles/home.module.sass';

interface HeaderProps {
  title?: String
}

class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <header className={styles.header}>
        <span>{this.props.title || 'Joseph Page'}</span>
      </header>
    )
  }
}

export default Header;