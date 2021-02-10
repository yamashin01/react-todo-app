import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickShift, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickShift(index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
