import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { DarkContext } from "../contexts/DarkContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function TodoHeader() {
  return <></>;
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
