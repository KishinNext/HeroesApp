import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
    const lastpath = localStorage.getItem('lastpath') || '/'

    const {user, dispatch} = useContext(AuthContext)
    const handleClick = () =>{
        // history.replace('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'Jairo'
            }
        })
        history.replace(lastpath)
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <button
                className = "btn btn-primary mt-4"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}
