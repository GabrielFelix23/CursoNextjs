import {InferGetServerSidePropsType} from 'next'
import Head from 'next/head'
import {getPostList} from '../shared/util'
import Header from '../components/Header'
import Navigation from '../components/navigation'
import Link from 'next/link'

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
            <Link href={`post/${slug}`}>
              <a>
                {slug.replace(/-/g, '')}
              </a>
            </Link>
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
