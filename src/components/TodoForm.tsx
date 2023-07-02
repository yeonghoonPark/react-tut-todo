import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Todo } from "../models/Todos";

type Props = {
  onAddTodo: (todo: Todo) => void;
};

const generateRandomString = (): string => {
  return Math.random().toString(36).split(".")[1];
};

export default function TodoFooter({ onAddTodo }: Props) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputVal.trim().length === 0) return;
      onAddTodo({
        id: generateRandomString(),
        isChecked: false,
        todo: inputVal,
      });
      setInputVal("");
    },
    [inputVal, onAddTodo],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type='text'
        placeholder='Add Todo..'
        required
        value={inputVal}
        onChange={handleChange}
      />
      <Button type='submit'>Add</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  background-color: var(--color-side-bg);
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
