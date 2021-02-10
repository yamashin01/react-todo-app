import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  /**
   * @brief 入力欄に追加されたTodoをTodoTextに保存
   * @param {in} event
   */
  const changeTodoText = (event) => setTodoText(event.target.value);

  /**
   * @brief todoTextの内容を未完了エリアに追加して、todoTextを初期化
   */
  const addTodoText = () => {
    if (todoText === "") return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  /**
   * @brief 未完了から完了にindex番目のTodoを移動
   * @param {in} index
   */
  const shiftCompleteArea = (index) => {
    const targetTodo = incompleteTodos[index];
    setCompleteTodos([...completeTodos, targetTodo]);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  /**
   * @brief 完了から未完了にindex番目のTodoを移動
   * @param {in} index
   */
  const shiftIncompleteArea = (index) => {
    const targetTodo = completeTodos[index];
    const newTodos = [...completeTodos];
    setIncompleteTodos([...incompleteTodos, targetTodo]);
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  /**
   * @brief index番目のTodoを削除
   * @param {in} index
   */
  const deleteIncompleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={changeTodoText}
        onClick={addTodoText}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickShift={shiftCompleteArea}
        onClickDelete={deleteIncompleteTodo}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickShift={shiftIncompleteArea}
      />
    </>
  );
};
