import {
  useEffect,
  useState,
  useContext,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import styled from "styled-components";
import { DarkContext } from "../contexts/DarkContext";
import { Todo } from "../models/Todos";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import TrashIcon from "./icons/TrashIcon";

const navList = ["all", "active", "completed"];

const generateRandomString = (): string => {
  return Math.random().toString(36).split(".")[1];
};

export default function TodoCard() {
  const { isDark, toggleDark } = useContext(DarkContext);
  const [navVal, setNavVal] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInputVal, setTodoInputVal] = useState("");

  const getTodosData = () => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  };

  const handleNavBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e.currentTarget.dataset.value);
    const value = e.currentTarget.dataset.value;
    setNavVal(value as string);
  };

  const handleTodo = (
    e: React.MouseEvent<HTMLLabelElement | HTMLInputElement>,
  ) => {};

  useEffect(() => {
    console.log(localStorage.getItem("todos"));
    setNavVal("all");
    getTodosData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputVal(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = [
      { id: generateRandomString(), isChecked: false, todo: todoInputVal },
    ];
    localStorage.setItem("todos", JSON.stringify([...todos, ...todo]));
    setTodoInputVal("");
    getTodosData();
  };

  return (
    <Container>
      {/* Header시작 */}
      <Header isDark={isDark}>
        {isDark ? (
          <SunIcon onClick={toggleDark} />
        ) : (
          <MoonIcon onClick={toggleDark} />
        )}

        <nav>
          <Ul>
            {navList.map((cV, i) => (
              <NavLi key={i}>
                <NavButton data-value={cV} onClick={handleNavBtns}>
                  {cV}
                </NavButton>
              </NavLi>
            ))}
          </Ul>
        </nav>
      </Header>
      {/* Header끝 */}

      {/* Main시작 */}
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
                    onClick={handleTodo}
                  />
                  <H2 isChecked={cV.isChecked}>{cV.todo}</H2>
                </Label>

                <TrashBox
                  // onClick={deleteTodo}
                  data-todo={cV.todo}
                >
                  <TrashIcon />
                </TrashBox>
              </Li>
            ))}
        </ul>
      </Main>
      {/* Main끝 */}

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

// Header시작
const Header = styled.header<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "#2a3042" : "#ebf2f5")};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavLi = styled.li<{ active?: boolean }>`
  list-style: none;
  cursor: pointer;
  font-weight: bolder;
  border-bottom: ${(props) => (props.active ? "2px solid #c9c7c7" : "")};
  color: ${(props) => (props.active ? "orangered" : " #f37e54")};
  text-transform: capitalize;
  :hover {
    color: orangered;
  }
`;

const NavButton = styled.button`
  all: unset;
`;
// Header끝

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
