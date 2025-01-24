// import React, { useState } from "react";

// function Services() {
//   const [count, setcount] = useState(0);
//   const increase = () => setcount(count + 1);
//   const decrease = () => setcount(count - 1);
//   return (
//     <div>
//       <p>count: {count}</p>
//       <button onClick={increase} className="p16 br8 cp bg2 m12">
//         Increase
//       </button>
//       <button onClick={decrease} className="p16 br8 cp bg2 m12">
//         Decrease
//       </button>
//     </div>
//   );
// }
// export default Services;

// import React, { useState, useEffect } from "react";

// function Services() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array runs effect only once

//   return <div>Elapsed Time: {seconds} seconds</div>;
// }

// export default Services;

// import React, { useContext, createContext } from "react";

// const UserContext = createContext();

// function UserInfo() {
//   const user = useContext(UserContext);
//   return (
//     <p>
//       User: {user.name}, {user.age}, {user.subject}
//     </p>
//   );
// }

// function Services() {
//   const user = { name: "baba bairagi", age: "20", subject: "Math" };

//   return (
//     <UserContext.Provider value={user}>
//       <UserInfo />
//     </UserContext.Provider>
//   );
// }
// export default Services;

import React, { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}
function Services() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        className="p24 br8 bg2 m12"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="p24 br8 bg2 m12"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </div>
  );
}
export default Services;
