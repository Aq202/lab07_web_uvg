import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlueButton.module.css'

function BlueButton({ text }) {
  return (
    <button type="button" className={styles.button}>{text}</button>
  )
}

export default BlueButton

BlueButton.propTypes = {
  text: PropTypes.string.isRequired,
}

BlueButton.defaultProps = {

}
