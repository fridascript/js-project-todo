import styled from "styled-components";
import { useTodoStore } from "../../store/useTodoStore";


const CounterText = styled.p`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: #9B9DFF;
`;

export const TodoCounter = () => {
const todos = useTodoStore((state) => state.todos);

const uncompletedCount = todos.filter(
  (todo) => !todo.completed
).length;


return (
  <CounterText>
    {uncompletedCount} task{uncompletedCount !== 1 && "s"} left
  </CounterText>
);
}; 
