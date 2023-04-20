import React from 'react'
// import PropTypes from 'prop-types';
import styles from './BottomSection.module.css'
import PrivacyPolicyBlock from '../PrivacyPolicyBlock/PrivacyPolicyBlock'
import monsterBanner from '../../assets/monsterBanner.svg'

function BottomSection() {
  return (
    <div className={styles.bottomSection}>
      <PrivacyPolicyBlock />
      <div className={styles.bannerContainer}>
        <img src={monsterBanner} alt="banner" />
      </div>
    </div>
  )
}

export default BottomSection

BottomSection.propTypes = {

}

BottomSection.defaultProps = {

}
