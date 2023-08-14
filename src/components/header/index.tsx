import React from 'react'
import styles from './header.module.scss'
import logo from '../../assets/logo-black.svg'

const Header = (): JSX.Element => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header_icon_section}`}>
        <div className={`${styles.header_icon}`}>
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <div className={`${styles.header_menu_section}`}>
        <div className={`${styles.header_menu}`}>
          About
        </div>
        <div className={`${styles.header_menu}`}>
          Skills
        </div>
        <div className={`${styles.header_menu} ${styles.header_menu__white}`}>
          CONTACT ME
        </div>
      </div>
    </div>
  )
}

export default Header
