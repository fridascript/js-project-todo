import { useState } from "react";
import styled from "styled-components";
import { useTodoStore } from "../store/useTodoStore.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { TodoCounter } from "./Counter/TodoCounter.jsx";


const TodoSection = styled.section`
  display: flex;
  flex-direction: column; 

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
font-size: 40px;
margin: 0px;
`;

const TodoCard = styled.section`
border: 1px solid black;
border-radius: 5px;
max-width: 80%;
height: auto;
min-height: 200px;
margin-bottom: 20px;

 @media (min-width: 1024px) {
   width:450px; 
  }
`;

const List = styled.ul`
margin: 15px;
padding-left: 16px;
margin-bottom: 50px;
`;

const Form = styled.form`
margin-top: 45px;
padding-left: 40px;
`;

const Input = styled.input`
border: 1px solid #9B9DFF;
margin-left: 10px;
font-size: 15px;
border-radius: 5px;
padding: 2px;
`;

const CustomCheckbox = styled.span`
width: 16px;
height: 16px;
border-radius: 50%;
border: 1px solid #9B9DFF;
display: inline-block;
background-color: ${({ $completed }) => ($completed ? "#9B9DFF" : "transparent")};
`;

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const [text, setText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
    <TodoSection>
      <Title>
        TO DO
      </Title>
     <TodoCounter/>
      <TodoCard>
        <Form onSubmit={handleSubmit}>
          <CustomCheckbox />
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="... add new task"
          />
        </Form>

        <List>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
      </TodoCard>
      </TodoSection>
    </>
  );
};
