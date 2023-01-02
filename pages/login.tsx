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

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onClickLogin = async () => {
    if (!emailCheck) return alert("이메을을 확인해주세요.");
    if (!passwordCheck) return alert("비밀번호를 확인해주세요.");

    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
    } catch (error: any) {
      alert(error.response.data.details);
    }
  };

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Title title="Login" />
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
        <Button variant="outlined" className="mb-2" onClick={onClickLogin}>
          로그인
        </Button>
        <Button variant="outlined" onClick={onClickSignUp}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
