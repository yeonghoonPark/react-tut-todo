import { useEffect, useState } from "react";
import styled from "styled-components";
import DarkTest from "../contexts/DarkContext";
import { Todo } from "../models/Todos";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

const todoData = [
  {
    isChecked: false,
    todo: "Eating Breakfast",
  },
  {
    isChecked: false,
    todo: "Running",
  },
  {
    isChecked: false,
    todo: "Lean English",
  },
];

export default function TodoCard() {
  const [navValue, setNavValue] = useState("all");
  const [todos, setTodos] = useState<Todo[]>(todoData);

  useEffect(() => {
    switch (navValue) {
      case "all":
        return setTodos(todoData);
      case "active":
        return setTodos(todoData.filter((cV) => !cV.isChecked));
      case "completed":
        return setTodos(todoData.filter((cV) => cV.isChecked));
      default:
        return;
    }
  }, [navValue]);

  return (
    <DarkTest>
      <Container>
        <TodoHeader navValue={navValue} setNavValue={setNavValue} />
        <TodoMain todos={todos} setTodos={setTodos} />
        <TodoFooter />
      </Container>
    </DarkTest>
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
