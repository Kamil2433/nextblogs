
"use client";
import React from 'react'
import styles from "./page.module.css";



export default function Comments({id}) {


    const sendcomment = async (id) => {

        console.log("sending comment--")
      
      
      
        var comment=document.getElementById("comment").value;
      
    console.log(comment)      
      
        try {
          await fetch(`http://localhost:3000/api/posts/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, comment }),
          });
          // mutate();
        } catch (error) {
          console.log(error);
        }
      };
      



  return (

    <>
    <div>Comments</div>

    <input
    type="text"
  
    placeholder="Comment"
    id="comment"
    className={styles.input}
  />
  <button className={styles.button} onClick={()=>sendcomment(id)}>
    Submit
  </button>
  </>
  )
}
