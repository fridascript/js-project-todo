import styled from "styled-components";
import { useTodoStore } from "../../store/useTodoStore";

//styling for component
const CounterText = styled.p`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: #5F62FC;
`;

//component to show count of Todo-tasks used in "TodoList.jsx"
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
