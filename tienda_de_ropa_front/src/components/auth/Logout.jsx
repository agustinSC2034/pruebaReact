import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useLogout } from '../contexts/session.context'

//Logout
const Logout = () => {
    localStorage.clear()
    const logout = useLogout()
    logout()
    return (
        <Navigate to="/login" />
    )
}

export default Logout