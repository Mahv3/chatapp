import React from 'react'

import firebase from '../config/firebase'

const Room = ({ user }) => {
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log('SignOut')
        })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <h1>welcome</h1>
            <button onClick={handleSignOut}></button>
        </>
    )
}

export default Room