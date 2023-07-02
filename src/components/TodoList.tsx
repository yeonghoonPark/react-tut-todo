import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Todo } from "../models/Todos";
import TrashIcon from "./icons/TrashIcon";

type Props = {
  filter: string;
  todos: Todo[];
  onUpdateTodo: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
};

const getFilteredTodos = (todos: Todo[], filter: string): Todo[] => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((cV) => !cV.isChecked);
    case "completed":
      return todos.filter((cV) => cV.isChecked);
    default:
      throw new Error("Something wrong..");
  }
};

export default function TodoList({
  filter,
  todos,
  onUpdateTodo,
  onDeleteTodo,
}: Props) {
  const filteredTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.name;
      const todo = todos.filter((cV) => cV.id === id);
      const isChecked = e.target.checked ? true : false;
      onUpdateTodo({ ...todo[0], isChecked });
    },
    [onUpdateTodo, todos],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const id = e.currentTarget.dataset.id;
      const todo = todos.filter((cV) => cV.id === id);
      onDeleteTodo({ ...todo[0] });
    },
    [onDeleteTodo, todos],
  );

  return (
    <Div>
      <Ul>
        {filteredTodos?.map(({ id, isChecked, todo }) => (
          <Li key={id}>
            <Label htmlFor={id}>
              <Input
                type='checkbox'
                id={id}
                name={id}
                checked={isChecked}
                onChange={handleChange}
              />
              <H2 isChecked={isChecked}>{todo}</H2>
            </Label>

            <Box data-id={id} onClick={handleClick}>
              <TrashIcon />
            </Box>
          </Li>
        ))}
      </Ul>
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-bg);
  color: var(--color-text);
  height: 100%;
  padding: 1rem;
  overflow-y: auto;
`;

const Ul = styled.ul`
  padding-left: 0;
  margin: 0;
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
  cursor: pointer;
`;

const H2 = styled.h2<{ isChecked: boolean }>`
  font-size: 1rem;
  font-weight: bolder;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: var(--color-text);
  transition: 0.3s;
`;

const Box = styled.div``;
