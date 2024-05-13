import React, { useState } from 'react'
import ClientEmailVerification from './ClientEmailVerification'

const ClientEmailVerificationContainer = ({clientAccounts, setIsVerified}) => {
  const [email, setEmail] = useState("");

    //Verify Email
    const verifyEmail = (e) => {
      e.preventDefault();

      // Find the email in the clientAccounts array using a more efficient method
      const matchingAccount = clientAccounts.find((account) => {
        return account.email === email;
      });
    
      if (matchingAccount) {
        console.log("Email is Verified");
        setIsVerified(true);
      } else {
        console.error("Invalid email for password change");
        console.log(email);
      }
    };
  return (
    <div>
    <ClientEmailVerification
        clientAccounts = {clientAccounts}
        verifyEmail = {verifyEmail}
        email = {email}
        setEmail={setEmail}
    />
    </div>
  )
}

export default ClientEmailVerificationContainer