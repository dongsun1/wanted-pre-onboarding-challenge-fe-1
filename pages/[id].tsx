import Title from "../components/title";
import TodoList from "../components/todoList";
import TodoContent from "../components/todoContent";
import AddTodo from "../components/addTodo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import api from "./api";
import { useTodoStore } from "../store/todo";

interface ITodo {
  todo: string;
  checked: boolean;
}

export default function Home() {
  const { todos, setTodos } = useTodoStore();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("login-token")) {
      alert("로그인을 해주세요.");
      router.push("/login");
    }
  }, [router]);

  const getTodos = async () => {
    const response = await api.get("/todos");
    setTodos(response.data.data);
  };

  getTodos();

  return (
    <div className="flex">
      <div
        className="flex flex-col w-full items-center border rounded mr-2"
        style={{ width: "500px", height: "700px" }}
      >
        <div>
          <div className="flex items-center">
            <Title title="Todo App" />
            <AddTodo />
          </div>
          <TodoList todos={todos} />
        </div>
      </div>
      <TodoContent />
    </div>
  );
}
