import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import styles from './SideMenu.module.css'

function SideMenu({ visible, setVisible }) {
  const handleClose = () => setVisible(false)

  return (
    <div className={`${styles.sideMenu} ${visible ? styles.visible : ''}`}>

      <ul>
        <li className={styles.menuTitle}>
          <span className={styles.title}>AJUSTES</span>
          <button type="button" className={styles.closeButton} onClick={handleClose}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </li>

        <li>
          <a href="/">Temas</a>
        </li>
        <li>
          <a href="/">Todos los Ajustes</a>
        </li>
        <li>
          <a href="/">Atajos de búsqueda !Bang</a>
        </li>
      </ul>

      <ul>
        <li className={styles.menuTitle}>
          <span className={styles.title}>COSAS ESENCIALES DE PRIVACIDAD</span>
        </li>

        <li>
          <a href="/">Temas</a>
        </li>
        <li>
          <a href="/">Todos los Ajustes</a>
        </li>
        <li>
          <a href="/">Atajos de búsqueda !Bang</a>
        </li>
      </ul>

      <ul>
        <li className={styles.menuTitle}>
          <span className={styles.title}>POR QUÉ PRIVACIDAD</span>
        </li>

        <li>
          <a href="/">Blog de Privacidad</a>
        </li>
        <li>
          <a href="/">Boletín informativo de Privacidad</a>
        </li>
        <li>
          <a href="/">Ayuda a Difundir la Privacidad</a>
        </li>
      </ul>

      <ul>
        <li className={styles.menuTitle}>
          <span className={styles.title}>APRENDE MÁS</span>
        </li>

        <li>
          <a href="/">Acerca de nosotros</a>
        </li>
        <li>
          <a href="/">Política de Privacidad</a>
        </li>
        <li>
          <a href="/">Trabajos</a>
        </li>
        <li>
          <a href="/">Kit de Prensa</a>
        </li>
      </ul>

      <ul>
        <li className={styles.menuTitle}>
          <span className={styles.title}>MANTENTE EN CONTACTO</span>
        </li>

        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">Reddit</a>
        </li>
        <li>
          <a href="/">Trabajos</a>
        </li>
        <li>
          <a href="/">Ayuda</a>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu

SideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
}

SideMenu.defaultProps = {

}
