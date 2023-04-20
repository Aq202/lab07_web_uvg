import React from 'react'
import styles from './MainPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import logo from '../../assets/logo.svg'
import SearchBar from '../../components/SearchBar/SearchBar'
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock'
import ContentInfoBlock from '../../components/ContentInfoBlock/ContentInfoBlock'
import BottomSection from '../../components/BottomSection/BottomSection'

function MainPage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <img src={logo} alt="DuckDuckGo" className={styles.logo} />
      <SearchBar />
      <FeaturesBlock />
      <ContentInfoBlock />
      <BottomSection />
    </div>
  )
}

export default MainPage
