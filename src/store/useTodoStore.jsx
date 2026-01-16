import { create } from "zustand";
import { persist } from "zustand/middleware"


export const useTodoStore = create(
  //zustand store (local storage of todo-tasks)
  persist (
  (set) => ({
  todos: [],

  //adds new todo to list
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),

//toggles the status of the todo (todo/done)
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),

    })),

//deletes todo from list
removeTodo: (id) => 
  set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}),
{
  name: "storage",
}
  )
);




