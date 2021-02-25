import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <>
      <Navigation/>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Header/>
      </main>
    </>
  )
}
