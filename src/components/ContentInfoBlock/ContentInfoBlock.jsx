import React from 'react'
// import PropTypes from 'prop-types';
import styles from './ContentInfoBlock.module.css'
import ContentItem from '../ContentItem/ContentItem'
import laptopImage from '../../assets/laptop.svg'
import searchImage from '../../assets/search.svg'
import mobileImage from '../../assets/mobile.svg'

function ContentInfoBlock() {
  return (
    <div className={styles.ContentInfoBlock}>
      <p className={styles.title}>Protección de Privacidad para Cualquier Dispositivo</p>

      <div className={styles.itemsContent}>
        <div className={styles.itemsContainer}>
          <ContentItem
            image={laptopImage}
            title="Privacidad para Chrome"
            content="Navega como siempre, nosotros nos encargamos del resto. Incluimos nuestro motor de búsqueda,
                   bloqueador de rastreadores y forzador de cifrado en una sola"
            link="Chrome Extensión"
          />
          <ContentItem
            image={searchImage}
            title="Motor de Búsqueda Privada"
            content="Busca privadamente con nuestra aplicación o extensión, añade búsquedas web privadas
                   a tu navegador favorito o busca directamente en"
            link="duckduckgo.com"
          />
          <ContentItem
            image={mobileImage}
            title="Aplicación de Navegación Privada"
            content="Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda,
                   bloqueador de rastreadores, forzador de cifrado y más. Disponible en"
            link="iOS y Android"
          />
        </div>

        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 134"
        >
          <path
            d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

export default ContentInfoBlock

ContentInfoBlock.propTypes = {}

ContentInfoBlock.defaultProps = {}
