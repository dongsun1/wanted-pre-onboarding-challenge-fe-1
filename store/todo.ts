import create from "zustand";
import { ITodo } from "../interfaces/todo.interface";

interface IUseTodoStore {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

export const useTodoStore = create<IUseTodoStore>((set) => ({
  todos: [],
  setTodos: (todos: ITodo[]) => set((state) => ({ ...state, todos })),
}));
