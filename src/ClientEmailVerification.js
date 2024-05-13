import React from 'react'
import ClientEmailVerifcationForm from './ClientEmailVerifcationForm'

const ClientEmailVerification = ({verifyEmail}) => {
  return (
    <ClientEmailVerifcationForm 
        verifyEmail = {verifyEmail}
    />
  )
}

export default ClientEmailVerification