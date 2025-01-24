// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo } from "../features/todo/todoSlice";
// import { RiDeleteBin5Line } from "react-icons/ri";

// function Todos() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div className="tac mt24 fs24">
//         <div className="mb16">Todos</div>
//         <ul className="df aic fdc">
//           {todos.map((todo) => (
//             <li key={todo.id} className="w70 df jcsb bg2 p24 br8 fc1 mb16 aic">
//               {todo.text}
//               <button onClick={() => dispatch(removeTodo(todo.id))}>
//                 <RiDeleteBin5Line className="bg1 p8 br8 fc2 fs42" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Todos;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = (id) => {
    if (newText.trim() === "") {
      alert("Todo text cannot be empty!");
      return;
    }
    dispatch(updateTodo({ id, updatedData: { text: newText } }));
    setEditId(null);
    setNewText("");
  };

  return (
    <div className="tac mt24 fs24">
      <div className="mb16">Todos</div>
      <ul className="df aic fdc">
        {todos.map((todo) => (
          <li key={todo.id} className="w70 df jcsb bg2 p24 br8 fc1 mb16 aic">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="p8 br4 fc2"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg1 p8 br8 fc2 fs16"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div className="df">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg1 p8 br8 fc2 fs20 mr12"
                  >
                    Update
                  </button>
                  <button onClick={() => dispatch(removeTodo(todo.id))}>
                    <RiDeleteBin5Line className="bg1 p8 br8 fc2 fs42" />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
