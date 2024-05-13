import React from 'react'
import ClientFpForm from './ClientFpForm'
const ClientForgotPassword = (clientAccounts, verifyEmail) => {
    const handleEditSubmit = (e) => {
        e.preventDefault();
      }; 
      

  return (
    <div>
        <ClientFpForm 
            handleConfirmSubmit = {handleEditSubmit}
            verifyEmail = {verifyEmail}
        />
    </div>
  )
}

export default ClientForgotPassword