import styled from "styled-components";
import { TodoList } from "./TodoList.jsx";
import { DoneTasks } from "./DoneTasks.jsx";

//styling for component
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column; 

  @media (min-width: 1024px) {
    flex-direction: row; 
    align-items: center; 
    justify-content: center; 
    gap: 40px;
    margin-top: 200px;
  }
`;

//component to wrap both boxes (mostly used for styling)
export const TodoPageWrapper = () => {
  return (
    <PageWrapper>
      <TodoList />
      <DoneTasks />
    </PageWrapper>
  );
};
