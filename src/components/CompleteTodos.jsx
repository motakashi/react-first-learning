import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReDo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReDo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
