import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [
    { id: 1, text: "Buy apples", completed: false },
    { id: 2, text: "Listen to the new Olivia Dean album", completed: false },
  ],

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


  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),

    })),


removeTodo: (id) => 
  set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}));




// {
//   todos: [], ⚡️
//     addTodo: () => { },
//       toggleTodo: () => { },
//         removeTodo: () => { }
// }