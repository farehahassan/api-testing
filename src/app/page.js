import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
    
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <Link href={"/api/commentsList"}> <h1> go to comments</h1></Link>
      <Link href={"/api/rapidApi"}> <h1> go to RapidAPI section</h1></Link>

     
    </main>
  )
}
