import { useEffect, useState } from "react";
import styled from "styled-components";
import { Todo } from "../models/Todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const getLoadTodosFromLocalStorage = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

type Props = {
  filter: string;
};

export default function TodoCard({ filter }: Props) {
  const [todos, setTodos] = useState<Todo[]>(getLoadTodosFromLocalStorage);

  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleUpdateTodo = (todo: Todo) => {
    setTodos(todos.map((cV) => (cV.id === todo.id ? todo : cV)));
  };

  const handleDeleteTodo = (todo: Todo) => {
    setTodos(todos.filter((cV) => cV.id !== todo.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Section>
      <TodoList
        filter={filter}
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <TodoForm onAddTodo={handleAddTodo} />
    </Section>
  );
}

const Section = styled.section`
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
