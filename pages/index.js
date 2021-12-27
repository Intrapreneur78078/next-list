import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
        <meta name="keywords" content="next" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto? Odit fugit, labore nihil hic veritatis repellendus distinctio cupiditate iusto.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto? Odit fugit, labore nihil hic veritatis repellendus distinctio cupiditate iusto.</p>
        <Link href='/next'><a className={styles.btn}>See Next Listing</a></Link>
      </div>
    </>
  )
}
