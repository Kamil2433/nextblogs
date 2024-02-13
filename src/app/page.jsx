/* eslint-disable */
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import HeroImg from "public/HomePageHero.png";
import Blogs from './blogs/page';

export default function Home() {

  
  return (

<>

    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Start your blogging journey from here</h1>
        <p className={styles.desc}>A perfect place to share ideas on technology</p>
        <Button url="/blogs" text="Read Blogs"/>
      </div>
      <div className={styles.imageContainer}>
        <Image src={HeroImg} alt="Coder Image" className={styles.img}/>
      </div>
    </div>
<div>


      <Blogs/>
</div>

</>
  )
}


