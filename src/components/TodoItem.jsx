import styled from "styled-components";
import { useTodoStore } from "../store/useTodoStore.jsx";

const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
opacity: ${({ $completed }) => ($completed ? 0.8 : 1)};
text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
text-decoration-color: #9B9DFF;
text-decoration-thickness: 2px;
margin: 10px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
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

const Button = styled.button`
border: none;
background: none; 
display:flex;

`;

export const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <Item $completed={todo.completed}>
      <Label>
        <HiddenCheckbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <CustomCheckbox $completed={todo.completed} />
        <span>{todo.text}</span>
      </Label>
      <Button>🗑️</Button>
    </Item>
  );
};
