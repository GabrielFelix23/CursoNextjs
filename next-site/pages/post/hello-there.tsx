import Image from 'next/image'

const Hello = () => (
    <article>
        <h1>Hello There!</h1>
        <Image
            src="/post/hello-there/img1.jpg"
            width={640}
            height={427}
        />
    </article>
)

export default Hello