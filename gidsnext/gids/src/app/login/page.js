

"use client"


import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation' // Import the useRouter hook

const LoginAdmin = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    axios.post('http://localhost:5000/admin/login', {
        userName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('type', res.data.type);
        localStorage.setItem('token', res.data.token);
        
        // Use router.push to navigate to the "adminlist" page
        //router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-admin">
      <h1 className="heading">LOGIN ADMIN</h1>

      <input
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Add User Name"
        className="input-admin"
        type="text"
      />
      <br />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Add Password"
        className="input-admin"
        type="password"
      />

      <button onClick={handleClick} className="submit-btn">
        SUBMIT
      </button>
    </div>
  );
};

export default LoginAdmin;


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