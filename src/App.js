import React, { useState, useEffect } from 'react'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

import firebase from './config/firebase'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Auth from './pages/Auth'

const App = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user.email)
            } else {
                setUser('')
            }
        })
    }, [])

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                    <Route exact path='/signup'>
                        <SignUp></SignUp>
                    </Route>
                    <Auth user={user}>
                        <Switch>
                            <Route exact path='/'>
                                <Room></Room>
                            </Route>
                        </Switch>
                    </Auth>
                </Switch>
            </Router>
        </>
    )
}

export default App