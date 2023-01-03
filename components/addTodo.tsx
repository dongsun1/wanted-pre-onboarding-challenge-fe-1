import { Button, Dialog, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import api from "../pages/api";
import { useTodoStore } from "../store/todo";

export default function AddTodo() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setTodos } = useTodoStore();
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  const onClickCreate = async () => {
    if (!title) return alert("제목을 입력해주세요.");
    if (!content) return alert("내용을 입력해주세요.");

    try {
      const response: any = await api.post("/todos", {
        title,
        content,
      });
      setTodos(response.data.data);
      setOpen(false);
    } catch (error) {
      router.push("/login");
    }
  };

  return (
    <div className="ml-2">
      <Button variant="outlined" className="text-2xl" onClick={handleClickOpen}>
        +
      </Button>

      <Dialog onClose={handleClose} open={open} maxWidth="xl">
        <div className="flex flex-col w-full p-4">
          <TextField
            label="Title"
            variant="outlined"
            size="small"
            className="w-96 mb-2"
            value={title}
            onChange={onChangeTitle}
          />
          <TextField
            multiline
            rows={4}
            label="Content"
            variant="outlined"
            size="small"
            className="w-96 mb-2"
            value={content}
            onChange={onChangeContent}
          />
          <Button variant="outlined" onClick={onClickCreate}>
            확인
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
