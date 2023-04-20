import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContentItem.module.css'

function ContentItem({
  image, title, content, link,
}) {
  return (
    <div className={styles.contentItem}>

      <img src={image} alt="item" />
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemText}>
        {content}
        {' '}
        <a href="/">{link}</a>
      </div>
    </div>
  )
}

export default ContentItem

ContentItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

ContentItem.defaultProps = {

}
