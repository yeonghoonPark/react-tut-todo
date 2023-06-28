import styled from "styled-components";
import { Todo } from "../models/Todos";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const navList = ["all", "active", "completed"];

type Props = {
  isDark: boolean;
  toggleDark: () => void;
  navVal: string;
  setNavVal: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoHeader({
  isDark,
  toggleDark,
  navVal,
  setNavVal,
  setTodos,
}: Props) {
  const handleNavBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.dataset.value;
    setNavVal(value as string);
    const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    switch (value) {
      case "all":
        setTodos(todos);
        break;
      case "active":
        setTodos(todos.filter((cV) => !cV.isChecked));
        break;
      case "completed":
        setTodos(todos.filter((cV) => cV.isChecked));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Header시작 */}
      <Header isDark={isDark}>
        {isDark ? (
          <SunIcon onClick={toggleDark} />
        ) : (
          <MoonIcon onClick={toggleDark} />
        )}

        <nav>
          <Ul>
            {navList.map((cV) => (
              <NavLi key={cV} active={cV === navVal}>
                <NavButton data-value={cV} onClick={handleNavBtns}>
                  {cV}
                </NavButton>
              </NavLi>
            ))}
          </Ul>
        </nav>
      </Header>
      {/* Header끝 */}
    </>
  );
}

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

const NavLi = styled.li<{ active: boolean }>`
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
