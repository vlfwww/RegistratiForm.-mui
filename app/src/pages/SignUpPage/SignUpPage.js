import React, { useState } from 'react';
import style from './SignUpPage.module.css';
import Header from '../Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const handleSignUp = () => {
        if (!username || !email || !password || !confirmPassword) {
            setAlertMessage('Пожалуйста, заполните все поля.');
            setAlertSeverity('error');
            return;
        }

        if (password.length <= 8) {
            setAlertMessage('Пароль должен быть длиннее 8 символов.');
            setAlertSeverity('warning');
            return;
        }

        if (password !== confirmPassword) {
            setAlertMessage('Пароли не совпадают.');
            setAlertSeverity('warning');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setAlertMessage('Некорректный email.');
            setAlertSeverity('warning');
            return;
        }

        setAlertMessage('Регистрация прошла успешно!');
        setAlertSeverity('success');
    };

    return (
        <div className="App">
            <Header />
            <main>
                <h2>SignUp</h2>
                <div className={style.wrapper}>
                    <div className={style.name}>
                        <TextField
                            className={style.input}
                            id="username"
                            label="UserName"
                            variant="standard"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={style.email}>
                        <TextField
                            className={style.input}
                            id="email"
                            label="Email"
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={style.password}>
                        <TextField
                            className={style.input}
                            id="password"
                            label="Password"
                            variant="standard"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={style.passwordConfirm}>
                        <TextField
                            className={style.input}
                            id="confirmPassword"
                            label="Confirm Password"
                            variant="standard"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button variant="outlined" onClick={handleSignUp}>
                            Sign Up
                        </Button>
                    </div>
                    <div className={style.login}>
                        <Link to={'/login'} className={style.login}>
                            Already have an account?
                        </Link>
                    </div>
                </div>
                {alertMessage && (
                    <Alert severity={alertSeverity} style={{ marginTop: '20px' }}>
                        {alertMessage}
                    </Alert>
                )}
            </main>
        </div>
    );
}

export default SignUpPage;