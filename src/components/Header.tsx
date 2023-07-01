import styled from "styled-components";
import { useDarkContext } from "../contexts/DarkContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type Props = {
  filters: string[];
  filter: string;
  onFilterChange: (filter: string) => void;
};

export default function TodoHeader({ filters, filter, onFilterChange }: Props) {
  const { isDark, toggleDark } = useDarkContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onFilterChange(e.currentTarget.name);
  };

  return (
    <>
      {/* Header시작 */}
      <Header isDark={isDark}>
        <div onClick={toggleDark}>{isDark ? <SunIcon /> : <MoonIcon />}</div>
        <nav>
          <Ul>
            {filters.map((cV) => (
              <NavLi key={cV} active={cV === filter}>
                <NavButton name={cV} onClick={handleClick}>
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
