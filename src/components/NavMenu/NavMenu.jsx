import React from 'react'
// import PropTypes from 'prop-types';
import styles from './NavMenu.module.css'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import twitterIcon from '../../assets/twitter.svg'
import redditIcon from '../../assets/reddit.svg'
import blogIcon from '../../assets/blog.svg'
import newsletterIcon from '../../assets/newsletter.svg'

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <NavMenuItem img={twitterIcon} title="Twitter" />
      <NavMenuItem img={redditIcon} title="Reddit" />
      <NavMenuItem img={blogIcon} title="Blog" />
      <NavMenuItem img={newsletterIcon} title="Newsletter" />
    </div>
  )
}

export default NavMenu

NavMenu.propTypes = {

}

NavMenu.defaultProps = {

}
