import React from 'react'
import PropTypes from 'prop-types'
import styles from './FeatureItem.module.css'
import checkIcon from '../../assets/checkIcon.svg'

function FeatureItem({ text }) {
  return (
    <li className={styles.item}>
      <img src={checkIcon} alt="" />
      <span>{text}</span>
    </li>
  )
}

export default FeatureItem

FeatureItem.propTypes = {
  text: PropTypes.string.isRequired,
}

FeatureItem.defaultProps = {}
