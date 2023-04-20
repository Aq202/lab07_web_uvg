import React from 'react'
// import PropTypes from 'prop-types';
import { BsFillMegaphoneFill } from 'react-icons/bs'
import { GiHamburgerMenu as HamburguerMenu } from 'react-icons/gi'
import { IoMdMegaphone as MegaphoneIcon } from 'react-icons/io'
import { CgChevronDown as DownArrow } from 'react-icons/cg'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.iconContainer}>
        <MegaphoneIcon className={`${styles.icon} ${styles.megaphoneIcon}`} />
        <DownArrow className={`${styles.icon} ${styles.arrowIcon}`} />
      </div>
      <HamburguerMenu className={`${styles.icon} ${styles.hamIcon}`} />
    </nav>
  )
}

export default NavBar

NavBar.propTypes = {

}

NavBar.defaultProps = {

}
