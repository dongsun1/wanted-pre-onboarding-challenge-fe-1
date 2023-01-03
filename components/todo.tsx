import { Button, Checkbox, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Todo({ id, title }: { id: string; title: string }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const onClickUpdate = () => {
    setIsUpdate(true);
  };

  const onClickSave = () => {
    setIsUpdate(false);
  };

  return (
    <Link
      className="flex border rounded w-96 h-16 items-center justify-between p-4 cursor-pointer"
      href={`/${id}`}
    >
      <div className="flex items-center">
        {isUpdate ? (
          <TextField
            label={title}
            variant="outlined"
            size="small"
            className="w-64"
          />
        ) : (
          <h1>{title}</h1>
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
    </Link>
  );
}
