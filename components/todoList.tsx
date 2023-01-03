import { useRouter } from "next/router";
import { useEffect } from "react";
import api from "../pages/api";
import { useTodoStore } from "../store/todo";
import Todo from "./todo";

export default function TodoList() {
  const { todos, setTodos } = useTodoStore();
  const router = useRouter();

  const getTodos = async () => {
    try {
      const response = await api.get("/todos");
      setTodos(response.data.data);
    } catch (error) {
      localStorage.removeItem("login-token");
      router.push("/login");
    }
  };

  useEffect(() => {
    if (!todos.length) getTodos();
  }, [router]);

  return (
    <div>
      {todos.length
        ? todos.map(({ id, title, content }) => {
            return (
              <div key={id} className="flex w-full justify-center mt-2">
                <Todo id={id} title={title} content={content} />
              </div>
            );
          })
        : null}
    </div>
  );
}
