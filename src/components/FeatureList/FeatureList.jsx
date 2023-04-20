import React from 'react'
// import PropTypes from 'prop-types';
import styles from './FeatureList.module.css'
import FeatureItem from '../FeatureItem/FeatureItem'

function FeatureList() {
  return (
    <ol className={styles.featureList}>
      <FeatureItem text="Busqueda privada" />
      <FeatureItem text="Bloqueador De Rastreadores" />
      <FeatureItem text="Cifrado De Sitio" />
    </ol>
  )
}

export default FeatureList

FeatureList.propTypes = {

}

FeatureList.defaultProps = {

}
