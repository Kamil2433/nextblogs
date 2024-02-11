/* eslint-disable */
"use client";
import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const getData = async()=>{
  const res = await fetch(`${process.env.DEV_URL}/api/posts/all`)

  console.log("here",res)
  
  if(!res.ok){
    console.log("Not able to fetch");
  }

  return res.json();
}

const Blogs = () => {

  const {data,mutate,error,isLoading}= useSWR('/api/posts/all', fetcher)
  
  return (
    <div className={styles.container}>
      <div className={styles.headingContent}>
        <h1 className={styles.heading}>Read Blogs</h1>
      </div>
      <div className={styles.blogs}>
        {
         data ? data.map((item)=>(
          <Link href={`/blogs/${item._id}`}>
            <div className={styles.blog}>
              <h1 className={styles.blogTitle}>{item.title}</h1>
              <p className={styles.blogDesc}>{item.desc}</p>
              <span className={styles.blogAuthor}>{item.username}</span>
            </div>
        </Link>
          )) : " "
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  // get the current environment

  // request posts from api
  let response = await fetch(`${process.env.DEV_URL}/api/posts/all`);
  // extract the data
  let data = await response.json();

  console.log(data)
  return {
      props: {
          posts:data
      },
  };
}


export default Blogs
