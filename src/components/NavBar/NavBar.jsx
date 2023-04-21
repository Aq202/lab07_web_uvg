import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import { GiHamburgerMenu as HamburguerMenu } from 'react-icons/gi'
import { IoMdMegaphone as MegaphoneIcon } from 'react-icons/io'
import { CgChevronDown as DownArrow } from 'react-icons/cg'
import styles from './NavBar.module.css'
import NavMenu from '../NavMenu/NavMenu'
import SideMenu from '../SideMenu/SideMenu'

function NavBar() {
  const [isNavbarMenuVisible, setIsNavbarMenuVisible] = useState(false)
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false)

  const handleMegaphoneIconClick = () => setIsNavbarMenuVisible((val) => !val)
  const handleMenuIconClick = () => setIsSideMenuVisible((val) => !val)

  return (
    <nav className={styles.navBar}>
      <button type="button" className={styles.iconContainer} onClick={handleMegaphoneIconClick}>
        <MegaphoneIcon className={`${styles.icon} ${styles.megaphoneIcon}`} />
        <DownArrow className={`${styles.icon} ${styles.arrowIcon}`} />
        {
          isNavbarMenuVisible && <NavMenu />
        }
      </button>
      <HamburguerMenu className={`${styles.icon} ${styles.hamIcon}`} onClick={handleMenuIconClick} />
      <SideMenu visible={isSideMenuVisible} setVisible={setIsSideMenuVisible} />
    </nav>
  )
}

export default NavBar

NavBar.propTypes = {

}

NavBar.defaultProps = {

}
