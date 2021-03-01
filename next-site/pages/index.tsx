import {InferGetServerSidePropsType} from 'next'
import Head from 'next/head'
import {getPostList} from '../shared/util'
import Header from '../components/Header'
import Navigation from '../components/navigation'

type PostList = string[]

export default function Home({posts}:InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Navigation/>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Header/>
        {posts.map((slug) => (
          <li key={slug}>
            {slug.replaceAll('-', '')}
          </li>
        ))}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts:PostList = getPostList()
  return{
    props:{
      posts
    }
  }
}
