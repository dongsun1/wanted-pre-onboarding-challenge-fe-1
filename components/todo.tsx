import { Button, Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { ITodo } from "../interfaces/todo.interface";

export default function Todo({ todo, checked }: ITodo) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const onClickUpdate = () => {
    setIsUpdate(true);
  };

  const onClickSave = () => {
    setIsUpdate(false);
  };

  return (
    <div className="flex border rounded w-5/6 h-16 items-center justify-between p-4">
      <div className="flex items-center">
        <Checkbox checked={isChecked} onChange={handleChange} />
        {isUpdate ? (
          <TextField
            label={todo}
            variant="outlined"
            size="small"
            className="w-64"
          />
        ) : (
          <h1 className={isChecked ? "line-through" : ""}>{todo}</h1>
        )}
      </div>
      <div>
        {isUpdate ? (
          <Button variant="outlined" onClick={onClickSave}>
            확인
          </Button>
        ) : (
          <div>
            <Button variant="outlined" className="mr-2" onClick={onClickUpdate}>
              수정
            </Button>
            <Button variant="outlined" color="error">
              삭제
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
