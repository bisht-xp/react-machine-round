import React, { useRef, useState } from "react";
import Todo from "./Todo";
import "./index.css";

const initialTodos = [
  { id: 1, todo: "Task 1", isCompleted: false },
  { id: 2, todo: "Task 2", isCompleted: false },
  { id: 3, todo: "Task 3", isCompleted: false },
];

const initialCompletedTodos = [
  { id: 4, todo: "Task 4", isCompleted: true },
  { id: 5, todo: "Task 5", isCompleted: true },
];
const DragAndDrop = () => {
  const [pendingTodos, setPendingTodos] = useState(initialTodos);
  const [completedTodos, setCompletedTodos] = useState(initialCompletedTodos);

  const dragItem = useRef(null);
  const containerRef = useRef(null);

  function handleDragStart(e, index, container) {
    // console.log(e.target, index, isPending);
    dragItem.current = index;
    containerRef.current = container;
    e.target.classList.add("fade");
  }

  function handleDragEnter(e) {
    e.target.classList.add("over");
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragLeave(e) {
    e.target.classList.remove("over");
  }

  function handleDrop(e, index, container) {
    const dragIndex = dragItem.current;

    if (dragItem.current === null) return;

    const sourceList =
      containerRef.current === "Pending" ? pendingTodos : completedTodos;
    const targetList = container === "Pending" ? pendingTodos : completedTodos;

    if (containerRef.current === container) {
      let updateList = JSON.parse(JSON.stringify(sourceList));
      const [moveItem] = updateList.splice(dragIndex, 1);
      updateList.splice(index, 0, moveItem);
      container === "Pending"
        ? setPendingTodos(updateList)
        : setCompletedTodos(updateList);
      dragItem.current = null;
    } else {
      const updateSourceList = [...sourceList];
      const updateTargetList = [...targetList];
      const [sourceTodo] = updateSourceList.splice(dragIndex, 1);
      updateTargetList.splice(index, 0, sourceTodo);
      if (container === "Pending") {
        setPendingTodos(updateTargetList);
        setCompletedTodos(updateSourceList);
      } else {
        setPendingTodos(updateSourceList);
        setCompletedTodos(updateTargetList);
      }
    }
    e.target.classList.remove("over");
  }

  function handleDragEnd(e) {
    e.target.classList.remove("fade", "over");
  }

  return (
    <div className="drag-drop-container">
      <Todo
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        title="Pending"
        todos={pendingTodos}
      />
      <Todo
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        title="Completed"
        todos={completedTodos}
      />
    </div>
  );
};

export default DragAndDrop;
