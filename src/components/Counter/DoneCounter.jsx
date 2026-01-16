import styled from "styled-components";
import { useTodoStore } from "../../store/useTodoStore";

//styling for component
const CounterText = styled.p`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: #5F62FC;;
`;


//component to show count of done-tasks used in "DoneTasks.jsx"
export const DoneCounter = () => {
const todos = useTodoStore((state) => state.todos);


const completedCount = todos.filter(
  (todo) => todo.completed
).length;


return (
  <CounterText>
    {completedCount} task{completedCount !== 1 && "s"} done
  </CounterText>
);
}; 
