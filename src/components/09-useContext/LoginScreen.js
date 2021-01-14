import React,{ useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    //obtener la referencia al userContext
    const { setUser } = useContext(UserContext)
    
    const userLogin = {
        id:123,
        nombre:'Lorena'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ ()=> setUser(userLogin)}
            >
                Login
            </button>
        </div>
    )
}
