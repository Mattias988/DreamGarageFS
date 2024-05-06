import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AuthService from '../Auth/AuthService';
import { useNavigate } from 'react-router-dom';

function Sign_up() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const handleSingUp = (e) => {
        e.preventDefault();
        AuthService.register(name, username, email, password).then(
        ()   => {
            navigate('/home')
        },
        (error) => {
            console.log("Logowanie nieudane.", error);
        }
        )
    }

    const handleGoToLogin = () => {
        navigate('/login'); 
    };

  return (
    <div className='bg-primary w-100% h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-3/4 h-3/4 bg-secondary font-primary font-black rounded-2xl'>
                <h1 className='text-white text-6xl flex justify-center pt-12'>
                    Sign up
                </h1>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className='pt-12 w-full grid grid-cols-2 justify-items-center pb-10'
                onSubmit={handleSingUp}
                >
                    <TextField
                    id="filled-error"
                    label="Name"
                    variant="standard"
                    color='secondary'
                    focused
                    inputProps={{
                        style:{color:'white'}
                    }}
                    onChange={(e) => setName(e.target.value)}
                    />
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
                    id="standard-error"
                    label="E-mail"
                    variant="standard"
                    color='secondary'
                    focused
                    inputProps={{
                        style:{color:'white'}
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    id="standard-error-helper-text"
                    label="Password"
                    variant="standard"
                    color='secondary'
                    focused
                    inputProps={{
                        style:{color:'white'}
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="text"
                        color='secondary'
                        onClick={handleGoToLogin}
                        className='w-full flex justify-center mt-4'
                    >
                        Login
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

export default Sign_up;