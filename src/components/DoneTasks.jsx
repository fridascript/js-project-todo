import styled from "styled-components";
import { useTodoStore } from "../store/useTodoStore.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { DoneCounter } from "./Counter/DoneCounter";

//styling for component
const DoneSection = styled.section`
  display: flex;
  flex-direction: column; 

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;
const Title = styled.h2`
text-decoration: line-through;
text-decoration-color: #9B9DFF;
margin: 0px;
`;
const DoneCard = styled.section`
 border: 1px solid black;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
 border-radius: 5px;
 max-width: 80%;
 height: auto;
 min-height: 200px;
 margin-bottom: 20px;

  @media (min-width: 1024px) {
   width:450px; 
   margin-right: 30px;
  }
`;
const List = styled.ul`
  padding-left: 10px;
  padding: 16px;
  margin: 10px;
  margin-bottom: 50px;
`;

//component for the DONE-box 
export const DoneTasks = () => {
  const todos = useTodoStore((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (

    <>
    <DoneSection>
      <Title>DONE</Title>
       <DoneCounter />
      <DoneCard>
        <List>
          {completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      </DoneCard>
      </DoneSection>
    </>
  );
};
