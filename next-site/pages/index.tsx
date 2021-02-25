import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.container}>
          <h1 className={styles.title}>Welcome Next.js!</h1>
        </header>
      </main>
    </>
  )
}
