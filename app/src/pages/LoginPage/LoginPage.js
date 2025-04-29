import style from "./LoginPage.module.css";
import React, { useState } from "react";
import Header from "../Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleLogin = () => {
    if (username && password) {
      if (password.length > 8) {
        setAlertMessage(`Username: ${username}\nPassword: ${password}`);
        setAlertSeverity("success");
      } else {
        setAlertMessage("Пароль должен быть длиннее 8 символов.");
        setAlertSeverity("warning");
      }
    } else {
      setAlertMessage("Пожалуйста, заполните все поля.");
      setAlertSeverity("error");
    }
  };
  return (
    <div className="App">
      <Header />
      <main>
        <h2>LOGIN</h2>
        <div className={style.wrapper}>
          <div className={style.name}>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              className={style.input}
              id="standard-basic"
              label="UserName"
              variant="standard"
            />
          </div>
          <div className={style.password}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className={style.input}
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div>
            <Button onClick={handleLogin} variant="outlined">
              Login
            </Button>
          </div>
          <div className={style.sign}>
            <Link to={"/signUp"} className={style.sign}>
              Don't have an account?
            </Link>
          </div>
        </div>
        {alertMessage && (
          <Alert severity={alertSeverity} style={{ marginTop: "20px" }}>
            {alertMessage}
          </Alert>
        )}
      </main>
    </div>
  );
}

export default LoginPage;
