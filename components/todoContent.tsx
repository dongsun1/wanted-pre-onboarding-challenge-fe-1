import { useCurrentTodoStore } from "../store/todo";
import Logout from "./logout";

export default function TodoContent() {
  const { todo } = useCurrentTodoStore();

  return (
    <div
      className="flex flex-col w-full items-center border rounded p-4"
      style={{ width: "500px", height: "700px" }}
    >
      <div className="flex w-full mb-2">
        <div className="border rounded p-2 w-4/5 h-10">{todo.title}</div>
        <Logout />
      </div>
      <div className="border rounded p-2 w-full h-full">{todo.content}</div>
    </div>
  );
}
