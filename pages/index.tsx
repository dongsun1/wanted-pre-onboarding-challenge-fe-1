import Title from "../components/title";
import TodoList from "../components/todoList";
import AddTodo from "../components/addTodo";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("login-token")) {
      alert("로그인을 해주세요.");
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex flex-col w-full items-center">
      <Title title="Todo App" />
      <AddTodo />
      <TodoList />
    </div>
  );
}
