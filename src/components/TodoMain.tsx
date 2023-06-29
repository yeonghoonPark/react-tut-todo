import { useCallback } from "react";
import styled from "styled-components";
import { Todo } from "../models/Todos";
import TrashIcon from "./icons/TrashIcon";

type Props = {
  isDark: boolean;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoMain({ isDark, todos, setTodos }: Props) {
  const handleTodoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.currentTarget.name;
      const localTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]",
      );

      setTodos(
        todos.map((cV) => {
          if (cV.id === id) {
            cV.isChecked = !cV.isChecked;
          }
          return cV;
        }),
      );

      localStorage.setItem(
        "todos",
        JSON.stringify(
          localTodos.map((cV) => {
            if (cV.id === id) {
              cV.isChecked = !cV.isChecked;
            }
            return cV;
          }),
        ),
      );
    },
    [setTodos, todos],
  );

  const handleTrashBtns = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const id = e.currentTarget.dataset.id;
      const localTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]",
      );

      setTodos(todos.filter((cV) => cV.id !== id));

      localStorage.setItem(
        "todos",
        JSON.stringify(localTodos.filter((cV) => cV.id !== id)),
      );
    },
    [setTodos, todos],
  );

  return (
    <>
      {/* Main시작 */}
      <Main isDark={isDark}>
        <ul>
          {todos.length > 0 &&
            todos.map(({ id, isChecked, todo }) => (
              <Li key={id}>
                <Label htmlFor={id}>
                  <Input
                    type='checkbox'
                    id={id}
                    name={id}
                    checked={isChecked}
                    onChange={handleTodoChange}
                  />
                  <H2 isChecked={isChecked}>{todo}</H2>
                </Label>

                <TrashBox onClick={handleTrashBtns} data-id={id}>
                  <TrashIcon />
                </TrashBox>
              </Li>
            ))}
        </ul>
      </Main>
      {/* Main끝 */}
    </>
  );
}

// Main시작
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
  cursor: pointer;
`;

const H2 = styled.h2<{ isChecked: boolean }>`
  font-size: 1rem;
  font-weight: bolder;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => props.isChecked && "gray"};
  transition: 0.3s;
`;

const TrashBox = styled.div``;
// Main끝
