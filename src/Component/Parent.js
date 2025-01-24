// import React, { useState } from "react";
// import Child from "./Child";

// function Parent(props) {
//   let [count, setCount] = useState(0);

//   let increment = () => {
//     setCount(++count);
//   };
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <Child value={count} />
//     </div>
//   );
// }

// export default Parent;

import React, { useState } from "react";
import Child from "./Child";

function Parent(props) {
  let [count, setCount] = useState(0);
  let callback = (valueFromChild) => setCount(valueFromChild);
  return (
    <div className="fs32 mb24 tac">
      <p>value Counter: {count}</p>
      <Child callbackFunc={callback} counterValue={count} />
    </div>
  );
}

export default Parent;
