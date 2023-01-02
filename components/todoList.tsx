import Todo from "./todo";

export default function TodoList() {
  return (
    <div className="flex w-full justify-center">
      <Todo todo="밥 먹기" checked={true} />
    </div>
  );
}
