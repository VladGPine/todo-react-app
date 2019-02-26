import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item" key={props.item.id}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p
        style={{
          textDecoration: props.item.completed ? "line-through" : "none",
          color: props.item.completed ? "lightgray" : "inherit"
        }}
      >
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
