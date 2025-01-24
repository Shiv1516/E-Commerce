// import React from "react";

// function Child(props) {
//   return (
//     <div>
//       <p>value of counter: {props.value}</p>
//     </div>
//   );
// }

// export default Child;

import React from "react";

function Child(props) {
  let childCounterValue = props.counterValue;
  return (
    <div className="fs32 mb24 tac">
      <button
        onClick={() => {
          props.callbackFunc(++childCounterValue);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Child;
