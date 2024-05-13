import React from 'react'
import ClientEmailVerification from './ClientEmailVerification'

const ClientEmailVerificationContainer = ({verifyEmail}) => {
  return (
    <ClientEmailVerification 
        verifyEmail = {verifyEmail}
    />
  )
}

export default ClientEmailVerificationContainer