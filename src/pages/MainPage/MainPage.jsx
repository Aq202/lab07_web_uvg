import React from 'react'
import styles from './MainPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import logo from '../../assets/logo.svg'
import SearchBar from '../../components/SearchBar/SearchBar'

function MainPage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <img src={logo} alt="DuckDuckGo" className={styles.logo} />
      <SearchBar />
    </div>
  )
}

export default MainPage
