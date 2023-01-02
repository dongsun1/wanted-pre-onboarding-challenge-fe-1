import { Button, TextField } from "@mui/material";

export default function AddTodo() {
  return (
    <div className="flex w-5/6 mb-2">
      <TextField className="w-full mr-2" label="Add Todo" variant="outlined" />
      <Button variant="outlined" className="text-2xl">
        +
      </Button>
    </div>
  );
}
