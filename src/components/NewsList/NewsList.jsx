import React from 'react'
import styles from './style.module.css'
import NewsItem from '../NewsItem/NewsItem'

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default NewsList
