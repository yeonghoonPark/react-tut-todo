import styled from "styled-components";
import { useDark } from "../contexts/DarkContext";
import { Todo } from "../models/Todos";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const navList = ["all", "active", "completed"];

type Props = {};

export default function TodoHeader() {
  const { isDark, toggleDark } = useDark();
  return (
    <>
      {/* Header시작 */}
      <Header isDark={isDark}>
        <div onClick={toggleDark}>{isDark ? <SunIcon /> : <MoonIcon />}</div>
        <nav>
          <Ul>
            {navList.map((cV) => (
              <NavLi key={cV} active={true}>
                <NavButton>{cV}</NavButton>
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
  background-color: var(--color-side-bg);
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
