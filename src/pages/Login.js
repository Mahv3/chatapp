import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}
// yarn add react-router-dom
export default Login