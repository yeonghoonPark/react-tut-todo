import styled from "styled-components";
import { Todo } from "../models/Todos";

type Props = {
  isDark: boolean;
  todoInputVal: string;
  setTodoInputVal: React.Dispatch<React.SetStateAction<string>>;
  getTodosData: () => void;
  todos: Todo[];
};

const generateRandomString = (): string => {
  return Math.random().toString(36).split(".")[1];
};

export default function TodoFooter({
  isDark,
  todoInputVal,
  setTodoInputVal,
  getTodosData,
  todos,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = [
      { id: generateRandomString(), isChecked: false, todo: todoInputVal },
    ];
    localStorage.setItem("todos", JSON.stringify([...todos, ...todo]));
    setTodoInputVal("");
    getTodosData();
  };

  return (
    <>
      {/* Footer시작 */}
      <Footer isDark={isDark}>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            placeholder='Add Todo..'
            required
            value={todoInputVal}
            onChange={handleInputChange}
          />
          <Button type='submit'>Add</Button>
        </Form>
      </Footer>
      {/* Footer끝 */}
    </>
  );
}

// Footer시작
const Footer = styled.footer<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "#2a3042" : "#ebf2f5")};
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  outline: none;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #f37e54;
  color: white;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: orangered;
  }
`;
// Footer끝
