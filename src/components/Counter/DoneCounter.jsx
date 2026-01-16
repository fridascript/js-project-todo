import styled from "styled-components";
import { useTodoStore } from "../../store/useTodoStore";


const CounterText = styled.p`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: #9B9DFF;
`;

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
