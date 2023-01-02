import { ITodo } from "../interfaces/todo.interface";
import Todo from "./todo";

export default function TodoList({ todos }: { todos: ITodo[] }) {
  return (
    <div>
      {todos.length
        ? todos.map(({ id, title }) => {
            return (
              <div key={id} className="flex w-full justify-center">
                <Todo title={title} />
              </div>
            );
          })
        : null}
    </div>
  );
}
