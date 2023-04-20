import React from 'react'
// import PropTypes from 'prop-types';
import { BiSearch as SearchIcon } from 'react-icons/bi'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input type="text" placeholder="Busca en la red sin ser rastreado" className={styles.input} />
      <button type="submit" className={styles.sendButton}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </form>
  )
}

export default SearchBar

SearchBar.propTypes = {

}

SearchBar.defaultProps = {

}
