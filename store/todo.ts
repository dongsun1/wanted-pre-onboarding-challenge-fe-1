import create from "zustand";
import { ITodo } from "../interfaces/todo.interface";

interface IUseTodoStore {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

interface IUseCurrentTodoStore {
  todo: ITodo;
  setTodo: (todos: ITodo) => void;
  setDefaultTodo: () => void;
}

export const useTodoStore = create<IUseTodoStore>((set) => ({
  todos: [],
  setTodos: (todos: ITodo[]) => set((state) => ({ ...state, todos })),
}));

export const useCurrentTodoStore = create<IUseCurrentTodoStore>((set) => ({
  todo: { title: "", content: "", id: "", createdAt: "", updatedAt: "" },
  setTodo: (todo: ITodo) => set((state) => ({ ...state, todo })),
  setDefaultTodo: () =>
    set((state) => ({
      ...state,
      title: "",
      content: "",
      id: "",
      createdAt: "",
      updatedAt: "",
    })),
}));
