import React from 'react'
// import PropTypes from 'prop-types';
import styles from './PrivacyPolicyBlock.module.css'

function PrivacyPolicyBlock() {
  return (
    <div className={styles.privacyPolicyBlock}>
      <h1>
        No almacenamos tu
        <br />
        información personal. Nunca.
      </h1>
      <p>
        Nuestra política de privacidad es sencilla: No
        <br />
        recolectamos o compartimos tu información personal.
      </p>
      <button type="button">Instala DuckDuckGo</button>
    </div>
  )
}

export default PrivacyPolicyBlock

PrivacyPolicyBlock.propTypes = {

}

PrivacyPolicyBlock.defaultProps = {

}
