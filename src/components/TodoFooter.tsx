import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { DarkContext } from "../contexts/DarkContext";
import { Todo } from "../models/Todos";

export default function TodoFooter() {
  return <></>;
}

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

const Input = styled.input`
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
