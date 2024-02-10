
/* eslint-disable */
import React, { } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/Comments";

const getData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/posts/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json;

    console.log(data);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};




// const BlogPost = 
export default  async function BlogPost({ params }) {
  // const [comment, setcomment] = useState(" ");
  
  
  const id = params.id;
  
  const data=await getData(id);
 

  return (
    <>

   
      <div className={styles.container}>
        <div className={styles.blogTitle}>
          <h1 className={styles.title}>{data.title}</h1>
        </div>

        {data.image ? (
          <div className={styles.container}>
            <img
              src={data.image}
              className={styles.img}
              height={500}
              width={700}
            />
          </div>
        ) : (
          "NO image "
        )}

        <div className={styles.blogDesc}>
          <h3 className={styles.desc}>{data.desc}</h3>
        </div>
        <div className={styles.blogContent}>
          <p className={styles.content}>{data.content}</p>
        </div>
        <div className={styles.blogAuthor}>
          <p className={styles.author}>{data.username}</p>
        </div>
     <Comments id={data._id}/>
     <h3 className={styles.desc}>Comments-</h3>

     {data.comments.map(com=>

 <h3 className={styles.blogContent}>{com}</h3>




     )


     }

    </div> 
    </>
  );
};

// export default BlogPost;
