import styled from "styled-components";
import { useTodoStore } from "../store/useTodoStore.jsx";

//styling for component
const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
margin: 10px;
`;
const Text = styled.span`
opacity: ${({ $completed }) => ($completed ? 0.5 : 1)};
text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
text-decoration-color: #9B9DFF;
text-decoration-thickness: 2px;
`;
const Label = styled.label`
  cursor: pointer;
  flex: 1;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  &:focus-visible + span {
    outline: 2px solid #9B9DFF;
    outline-offset: 3px;
  }
`;
const CustomCheckbox = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid #9B9DFF;
  display: inline-block;
  background-color: ${({ $completed }) => ($completed ? "#9B9DFF" : "transparent")};
`;
const RemoveButton = styled.button`
border: none;
background: none; 
display: inline-flex;
cursor: pointer;
transition: transform 0.15s ease;

&:hover {
  transform: scale(1.2);
}
`;

//component for items used within the TODO-box
export const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <Item $completed={todo.completed}>
      <Label>
        <HiddenCheckbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <CustomCheckbox $completed={todo.completed} />
        <Text  $completed={todo.completed}>
          {todo.text}</Text>
      </Label>
      <RemoveButton onClick={(e) => {
      e.stopPropagation()
      removeTodo(todo.id)
    }}> 
      🗑️
      </RemoveButton>
    </Item>
  );
};
