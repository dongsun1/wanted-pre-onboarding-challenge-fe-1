import { useRouter } from "next/router";
import { useEffect } from "react";
import api from "./api";
import { useCurrentTodoStore } from "../store/todo";
import Main from "../components/main";

export default function Home() {
  const { setTodo } = useCurrentTodoStore();
  const router = useRouter();

  useEffect(() => {
    const getTodo = async (id: string) => {
      try {
        const response = await api.get(`/todos/${id}`);
        setTodo(response.data.data);
      } catch (error) {
        localStorage.removeItem("login-token");
        router.push("/login");
      }
    };

    if (typeof router.query.id === "string") {
      getTodo(router.query.id);
    }
  }, [router.query.id]);

  return <Main />;
}
