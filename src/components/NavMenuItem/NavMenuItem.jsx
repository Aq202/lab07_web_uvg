import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavMenuItem.module.css'

function NavMenuItem({ img, title }) {
  return (
    <a className={styles.navMenuItem} href="/">
      <img src={img} alt="icon" />
      <span>{title}</span>
    </a>
  )
}

export default NavMenuItem

NavMenuItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

NavMenuItem.defaultProps = {

}
