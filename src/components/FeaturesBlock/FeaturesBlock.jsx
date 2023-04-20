import React from 'react'
// import PropTypes from 'prop-types';
import styles from './FeaturesBlock.module.css'
import FeatureList from '../FeatureList/FeatureList'
import BlueButton from '../BlueButton/BlueButton'

function FeaturesBlock() {
  return (
    <div className={styles.featuresBlock}>
      <h1>
        ¿Cansado de ser rastreado en línea?
        <span> Podemos ayudar.</span>
      </h1>
      <p className={styles.subtitle}>
        Obtén protección de privacidad en tu navegador sin interrupciones gratis con una descarga:
      </p>
      <FeatureList />
      <BlueButton text="Agrega DuckDuckGo en Chrome" />
      <p className={styles.confidenceMessage}>¡Con la confianza de decenas de millones de personas en todo el mundo!</p>
    </div>
  )
}

export default FeaturesBlock

FeaturesBlock.propTypes = {

}

FeaturesBlock.defaultProps = {

}
