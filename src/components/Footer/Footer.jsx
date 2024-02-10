import React from 'react';
import styles from "./footer.module.css";
import Link from 'next/link';
import Image from 'next/image';
import github from "public/github.png";

const Footer = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.socials}>
     
        <Link href="https://github.com/Kamil2433">
          <div className={styles.imgContainer}>
            

            <Image src={github} alt="Gh"  className={styles.img}/>

          
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer