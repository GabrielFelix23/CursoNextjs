import Head from 'next/head'
import Image from 'next/image'

const Hello = () => (
    <article>
        <Head>
            <title>Hello there :: My Blog</title>
            <meta property="og:title" content="Hello there :: My Blog"/>
        </Head>

        <h1>Hello There!</h1>
        <Image
            src="/post/hello-there/img1.jpg"
            width={640}
            height={427}
        />
    </article>
)

export default Hello