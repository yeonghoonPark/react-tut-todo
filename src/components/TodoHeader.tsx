import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { DarkContext } from "../contexts/DarkContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type Props = {
  navValue: string;
  setNavValue: Dispatch<SetStateAction<string>>;
};

const navs = ["all", "active", "completed"];

export default function TodoHeader({ navValue, setNavValue }: Props) {
  const { isDark, toggleDark } = useContext(DarkContext);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.dataset.value;
    setNavValue(value as string);
  };

  return (
    <Header isDark={isDark}>
      {isDark ? (
        <SunIcon onClick={toggleDark} />
      ) : (
        <MoonIcon onClick={toggleDark} />
      )}

      <nav>
        <Ul>
          {navs.map((cV, i) => (
            <Li
              active={navValue === cV}
              key={i}
              data-value={cV}
              onClick={handleClick}
            >
              {cV}
            </Li>
          ))}
        </Ul>
      </nav>
    </Header>
  );
}

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

const Li = styled.li<{ active: boolean }>`
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
