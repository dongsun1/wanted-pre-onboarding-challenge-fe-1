import AddTodo from "./addTodo";
import Title from "./title";
import TodoContent from "./todoContent";
import TodoList from "./todoList";

export default function Main() {
  return (
    <div className="flex">
      <div
        className="flex flex-col w-full items-center border rounded mr-2"
        style={{ width: "500px", height: "700px" }}
      >
        <div>
          <div className="flex justify-center items-center">
            <Title title="Todo App" />
            <AddTodo />
          </div>
          <TodoList />
        </div>
      </div>
      <TodoContent />
    </div>
  );
}
