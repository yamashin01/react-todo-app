import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickShift } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickShift(index);
                }}
              >
                戻る
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
