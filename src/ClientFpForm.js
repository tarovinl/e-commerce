import React, { useState } from 'react'

const ClientFpForm = () => {
    const [changePassword, setChangePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form>
        <input 
            type = "password"
            id = "password"
            placeholder="Password"
            value = {changePassword}
            onChange = {(e) => setChangePassword(e.target.value)}
            required
        />
        <input 
            type = "password"
            id = "cPassword"
            placeholder = "Change Password"
            value = {confirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}
        />
    </form>
  )
}

export default ClientFpForm