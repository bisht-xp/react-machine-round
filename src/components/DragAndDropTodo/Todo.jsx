import React, { useRef, useState } from "react";
import "./index.css";

const Todo = ({title, todos, onDragStart, onDragEnd, onDragEnter, onDragOver, onDragLeave, onDrop}) => {
//   function handleDragEnter(e) {
//     e.target.classList.add("over");
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     return false;
//   }

//   function handleDragLeave(e) {
//     e.target.classList.remove("over");
//   }

//   function handleDrop(e, idx) {
//     if(draggedItemRef.current === idx) {
//         draggedItemRef.current = null;
//         return;
//     }
//     const updateTodo = [...Todos];
//     const temp = updateTodo[idx].todo;
//     updateTodo[idx].todo = updateTodo[draggedItemRef.current].todo;
//     updateTodo[draggedItemRef.current].todo = temp;
//     setTodos(updateTodo);
//     e.target.classList.remove('over');
//     return false;
//   }

//   function handleDragStart(e, idx) {
//     draggedItemRef.current = idx;
//     e.target.classList.add('fade');
//   }

//   function handleDragEnd(e) {
//     e.target.classList.remove("fade", "over");
//   }
  return (
    <div className="wrapper todo-box">
        <div className="title">
            {title}
        </div>
      {todos.map((todo, index) => (
        <List
          onDragStart={(e) => onDragStart(e, index, title)}
          onDragEnd={onDragEnd}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={(e) => onDrop(e, index, title)}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

function List({ todo, onDragStart, onDragEnd, onDragEnter, onDragOver, onDragLeave, onDrop }) {
  return (
    <div
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      draggable
      className="task"
    >
      {todo.todo}
    </div>
  );
}

export default Todo;