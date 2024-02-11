import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import { BASE_URL } from '@/utils/Constants';

const getData = async()=>{
  const res = await fetch(`${process.env.DEV_URL}/api/posts/all`)

  console.log("here",res)
  
  if(!res.ok){
    console.log("Not able to fetch");
  }

  return res.json();
}

const Blogs = async() => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.headingContent}>
        <h1 className={styles.heading}>Read Blogs</h1>
      </div>
      <div className={styles.blogs}>
        {
          data.map((item)=>(
          <Link href={`/blogs/${item._id}`}>
            <div className={styles.blog}>
              <h1 className={styles.blogTitle}>{item.title}</h1>
              <p className={styles.blogDesc}>{item.desc}</p>
              <span className={styles.blogAuthor}>{item.username}</span>
            </div>
        </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs
