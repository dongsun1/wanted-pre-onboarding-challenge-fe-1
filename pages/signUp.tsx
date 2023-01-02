import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Title from "../components/title";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import api from "./api";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [password2Check, setPassword2Check] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const validateEmail = (value: string) => {
    const reg: RegExp = /@.+\./;
    return reg.test(value);
  };

  const validatePassword = (value: string) => {
    const reg: RegExp = /^.{8,}$/;
    return reg.test(value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (validatePassword(e.target.value)) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  const onChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    if (password === e.target.value) {
      setPassword2Check(true);
    } else {
      setPassword2Check(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onClickSignUp = async () => {
    if (!emailCheck) return alert("이메일을 확인해주세요.");
    if (!passwordCheck) return alert("비밀번호를 확인해주세요.");
    if (!password2Check) return alert("비밀번호가 일치하지 않습니다.");

    try {
      const response: any = await api.post("/users/create", {
        email,
        password,
      });

      alert(response.message);
      router.push("/login");
    } catch (error: any) {
      alert(error.response.data.details);
    }
  };

  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center border rounded"
      style={{ width: "500px", height: "700px" }}
    >
      <Title title="Sign Up" />
      <div className="flex flex-col">
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          className="w-64 mb-2"
          color={emailCheck ? "primary" : "error"}
          value={email}
          onChange={onChangeEmail}
        />
        <FormControl className="w-64 mb-2" variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            color={passwordCheck ? "primary" : "error"}
            onChange={onChangePassword}
          />
        </FormControl>
        <FormControl className="w-64 mb-2" variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password Check
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password Check"
            value={password2}
            color={password2Check ? "primary" : "error"}
            onChange={onChangePassword2}
          />
        </FormControl>
        <Button variant="outlined" className="mb-2" onClick={onClickSignUp}>
          회원가입
        </Button>
        <Link href="/login">
          <Button variant="outlined" className="w-full">
            로그인
          </Button>
        </Link>
      </div>
    </div>
  );
}
