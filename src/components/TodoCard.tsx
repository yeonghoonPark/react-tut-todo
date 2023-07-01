import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDark } from "../contexts/DarkContext";
import { Todo } from "../models/Todos";
import TodoFooter from "./TodoFooter";

import TodoMain from "./TodoMain";

export default function TodoCard() {
  const { isDark, toggleDark } = useDark();
  const [navVal, setNavVal] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInputVal, setTodoInputVal] = useState("");

  const getTodosData = async () => {
    const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todos);
  };

  useEffect(() => {
    console.log(localStorage.getItem("todos"));
    setNavVal("all");
    getTodosData();
  }, []);

  return (
    <Container>
      <TodoMain isDark={isDark} todos={todos} setTodos={setTodos} />
      <TodoFooter
        isDark={isDark}
        todoInputVal={todoInputVal}
        setTodoInputVal={setTodoInputVal}
        getTodosData={getTodosData}
        todos={todos}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px #b3b0b0;
  overflow: hidden;
`;
