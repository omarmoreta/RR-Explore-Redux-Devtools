import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, clearAll } from "./features/todoSlice";

const ToDo = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const addingToDo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const showToDo = todos.map((item, index) => <h1 id={index}>{item}</h1>);

  return (
    <div>
      {showToDo}
      <form onSubmit={(e) => addingToDo(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add To Do</button>
      </form>
      <button onClick={() => dispatch(removeTodo())}>Remove To Do</button>
      <button onClick={() => dispatch(clearAll())}>Clear All</button>
    </div>
  );
};

export default ToDo;
