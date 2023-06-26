import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import { DarkContext } from "../contexts/DarkContext";
import { Todo } from "../models/Todos";
import TrashIcon from "./icons/TrashIcon";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export default function TodoMain({ todos, setTodos }: Props) {
  const { isDark } = useContext(DarkContext);

  const checkTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const todo = e.target.name;
    const isChecked = e.target.checked;
    setTodos(
      todos.map((cV) => {
        cV.todo === todo && (cV.isChecked = isChecked);
        return cV;
      }),
    );
  };

  const deleteTodo = (e: React.MouseEvent<HTMLDivElement>) => {
    const todo = e.currentTarget.dataset.todo;
    const index = todos.findIndex((cV) => cV.todo === todo);
    console.log(index);
    console.log(todos.splice(index, 1));
    // setTodos(todos.filter((cV) => cV.todo !== todo));
    setTodos((prev) => prev.slice(index, 0));
  };

  return (
    <Main isDark={isDark}>
      <ul>
        {todos.length > 0 &&
          todos.map((cV, i) => (
            <Li key={i}>
              <Label htmlFor={`${cV.todo}${i}`}>
                <Input
                  type='checkbox'
                  id={`${cV.todo}${i}`}
                  name={cV.todo}
                  checked={cV.isChecked}
                  onChange={checkTodo}
                />
                <H2 isChecked={cV.isChecked}>{cV.todo}</H2>
              </Label>

              <TrashBox onClick={deleteTodo} data-todo={cV.todo}>
                <TrashIcon />
              </TrashBox>
            </Li>
          ))}
      </ul>
    </Main>
  );
}

const Main = styled.main<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  height: 100%;
  padding: 1rem;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 16px;
  :checked {
    background-color: red;
  }
`;

const H2 = styled.h2<{ isChecked: boolean }>`
  font-size: 1rem;
  font-weight: bolder;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => props.isChecked && "gray"};
  transition: 0.3s;
`;

const TrashBox = styled.div``;
