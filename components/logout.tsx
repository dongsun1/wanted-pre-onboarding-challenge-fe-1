import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();

  const onClickLogout = () => {
    localStorage.removeItem("login-token");
    router.push("/login");
  };

  return (
    <Button variant="outlined" className="ml-2" onClick={onClickLogout}>
      로그아웃
    </Button>
  );
}
