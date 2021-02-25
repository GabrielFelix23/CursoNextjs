import styles from './header.module.css'

export default function Header(){
    return(
        <header className={styles.container}>
          <h1 className={styles.title}>Welcome Next.js!</h1>
        </header>
    )
}