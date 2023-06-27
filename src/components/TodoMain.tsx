import styled from "styled-components";

export default function TodoMain() {
  return <></>;
}

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
  :checked {
    background-color: red;
  }
`;

const H2 = styled.h2<{ isChecked: boolean }>`
  font-size: 1rem;
  font-weight: bolder;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => props.isChecked && "gray"};
  transition: 0.3s;
`;

const TrashBox = styled.div``;
