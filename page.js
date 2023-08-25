

"use client"
import axios from 'axios';
import { useState } from 'react'
//import './addAdmin.css'
import { useRouter } from 'next/navigation';


import Link from 'next/link'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState("");



  const handleClick = () => {
    console.log(userName, password)
    axios.post('http://localhost:5000/admin/login', {
      userName, password
    }).then((res) => {
      console.log(res.data)
      localStorage.setItem('type', res.data.type)
      localStorage.setItem('token', res.data.token);
    
      router.push('/');
    }).catch((err) => {
      console.log(err)
    })
  }




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <div className='border-4 mx-16 my-16'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField

                value={userName}
                onChange={(e) =>
                  setUsername(e.target.value)}


                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter User Name"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField

                value={password}
                onChange={(e) => setPassword(e.target.value)}



                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button

                onClick={handleClick}
                className='rounded-full bg-slate-700'
                type="submit"
                fullWidth
               
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>

    </div>
  );
}


/*
import axios from 'axios';
import { useState } from 'react'
//import './addAdmin.css'
//import { useRouter } from "next/navigation";
import Link from 'next/link'


const LoginAdmin = () => {

    //const navigate = useRouter();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState("");



    const handleClick = () => {
        console.log(userName, password)
        axios.post('http://localhost:5000/admin/login', {
            userName, password
                 }).then((res) => {
            console.log(res.data)
            localStorage.setItem( 'type', res.data.type)
            localStorage.setItem('token', res.data.token );
            <Link href="/adminlist"></Link>
            //navigate('/adminlist')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="card-admin">
            <h1 className="heading">LOGIN ADMIN</h1>

            <input value={userName}
                onChange={(e) => setUsername(e.target.value)} placeholder='Add User Name' className="input-admin" type="text" /><br></br>

            <input value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Add Password" className="input-admin" type="password" />

        

            <button onClick={handleClick} className="submit-btn">SUBMIT</button>
        </div>
    )
}

export default LoginAdmin;

*/