// import React, { useState, useEffect } from "react";

// function Card() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         if (!res.ok) {
//           throw new error("erro in Api Data");
//         }
//         return res.json();
//       })
//       .then((json) => setData(json))
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);
//   return (
//     <div className="main-container-card">
//       <h1>Posts</h1>
//       <ul className="df fww">
//         {data.map((post) => (
//           <li key={post.id} className="brd1 p12 m12 flx33">
//             <h3>{post.userId}</h3>
//             <h4>{post.id}</h4>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Card;

import React, { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error("error message", error));
  // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch("error occure in api data");
  });

  return (
    <div className="df jcc fdc">
      <h2>Card Data</h2>
      {data.map((item) => (
        <div key={item.id} className="brd2 m12 p12 flx33">
          <h2>{item.id}</h2>
          <h4>{item.userId}</h4>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Card;
