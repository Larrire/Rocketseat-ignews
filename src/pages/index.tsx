import styles from '../../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eita preula</title>
      </Head>
      <h1 className={styles.title}>
        Hello world<span>!</span>
      </h1>
    </>
  )
}
