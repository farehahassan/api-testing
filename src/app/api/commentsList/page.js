// "use client"
// import { useEffect , useState } from 'react';
// export default function page () {
//     const [comment , setComment] = useState([])
//     // let data;
//     useEffect(async () => {
//         let data = await fetch("https://dummyjson.com/comments");
//         data = await data.json();
//         console.log(data);
//         setComment(data.comments);
//       }, [])
  
//     return (
//         <div>
//             <h1>HEHEHEH</h1>
//             {comment.map((item)=>(
//                 <h3>{item.id}</h3>
//             ))}
//         </div>
//     )
// }
"use client"
import { useEffect, useState } from "react";

export default function page() {
  const [comment, setComment] = useState([]);

  const getData = async () => {
    let data = await fetch("https://dummyjson.com/comments");
    data = await data.json();
    console.log(data);
    setComment(data.comments);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>HEHEHEH</h1>
      {comment.map((item) => (
        <h3>{item.postId}</h3>
      ))}
    </div>
  );
}

 