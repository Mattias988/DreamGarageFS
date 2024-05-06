import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Auth/AuthService';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(username, password).then(
          () => {
            navigate('/');
          },
          (error) => {
            console.log('Logowanie nieudane.', error);
          }
        );
      };

    const handleGoToSignUp = () => {
        navigate('/signup');  
    };

  return (
    <div className='bg-primary w-100% h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-3/4 h-3/4 bg-secondary font-primary font-black rounded-2xl'>
                <h1 className='text-white text-6xl flex justify-center pt-12'>
                    Login
                </h1>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className='pt-12 w-full grid grid-cols-2 justify-items-center pb-10'
                onSubmit={handleLogin}
                >
                    <TextField
                    id="filled-error-helper-text"
                    label="Username"
                    variant="standard"
                    color='secondary'
                    focused
                    inputProps={{
                        style:{color:'white'}
                    }}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                    id="standard-error-helper-text"
                    label="Password"
                    variant="standard"
                    color='secondary'
                    type='password'
                    focused
                    inputProps={{
                        style:{color:'white'}
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="text"
                        color='secondary'
                        onClick={handleGoToSignUp}
                        className='w-full flex justify-center mt-4'
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="text"
                        color='secondary'
                        className='w-full flex justify-center '
                        type='submit'
                    >
                        Submit
                    </Button>
                </Box>
            </div>
        </div>
    </div>
  );
}

export default Login;