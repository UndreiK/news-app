import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'

const Main = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        console.log(response)
        setNews(response.news)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[8]} /> : null}
      <NewsList news={news} />
    </main>
  )
}

export default Main
