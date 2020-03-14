import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'


const SignUp = () => {
    const [handlename, setHandlename] = ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('User Created')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label htmlFor='handlename'>handlename</label>
                    <input
                        type=''
                        id='handlename'
                        value={handlename}
                        onChange={e => setHandlename(e.target)}
                    ></input>

                </div> */}
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
                <button type='submit'>SignUp</button>
            </form>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default SignUp