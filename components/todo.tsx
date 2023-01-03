import { Button, Checkbox, Dialog, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import api from "../pages/api";
import { useCurrentTodoStore, useTodoStore } from "../store/todo";

export default function Todo({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);
  const { todos, setTodos } = useTodoStore();
  const { setTodo } = useCurrentTodoStore();
  const router = useRouter();

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  const onChangeCurrentTitle = (e: any) => {
    setCurrentTitle(e.target.value);
  };

  const onChangeCurrentContent = (e: any) => {
    setCurrentContent(e.target.value);
  };

  const onClickSave = async () => {
    try {
      const response: any = await api.put(`/todos/${id}`, {
        title: currentTitle,
        content: currentContent,
      });

      setTodos(response.data.data);
      setTodo(response.data.data);
      onClickClose();
    } catch (error) {
      router.push("/login");
    }
  };

  const onClickDelete = async () => {
    try {
      await api.delete(`/todos/${id}`);

      setTodos(todos.filter(({ id: _id }) => _id !== id));
      setTodo({ title: "", content: "", id: "", createdAt: "", updatedAt: "" });
      router.push("/");
    } catch (error) {
      router.push("/login");
    }
  };

  return (
    <Link
      className="flex border rounded w-96 h-16 items-center justify-between p-4 cursor-pointer"
      href={`/${id}`}
    >
      <div className="flex items-center">
        <h1>{title}</h1>
      </div>
      <div>
        <div>
          <Button variant="outlined" className="mr-2" onClick={onClickOpen}>
            수정
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={(e) => {
              e.preventDefault();
              onClickDelete();
            }}
          >
            삭제
          </Button>
        </div>
      </div>

      <Dialog onClose={onClickClose} open={open} maxWidth="xl">
        <div className="flex flex-col w-full p-4">
          <TextField
            label="Title"
            variant="outlined"
            size="small"
            className="w-96 mb-2"
            value={currentTitle}
            onChange={onChangeCurrentTitle}
          />
          <TextField
            multiline
            rows={4}
            label="Content"
            variant="outlined"
            size="small"
            className="w-96 mb-2"
            value={currentContent}
            onChange={onChangeCurrentContent}
          />
          <Button variant="outlined" onClick={onClickSave}>
            수정
          </Button>
        </div>
      </Dialog>
    </Link>
  );
}
