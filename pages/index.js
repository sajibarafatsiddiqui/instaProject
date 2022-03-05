import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed.js'
import Header from '../components/Header.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head></Head>

      <Header />
      <Feed />
      <footer className={styles.footer}></footer>
    </div>
  )
}
