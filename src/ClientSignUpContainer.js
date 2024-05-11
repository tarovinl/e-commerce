import React from "react";
import ClientSignup from "./ClientSignup";

const ClientSignUpContainer = ({ 
  addAccounts,newFirstName,
  setNewFirstName,
  newLastName,
  setNewLastName,
  newEmail,
  setNewEmail,
  newPassword,
  setNewPassword}) => {
 
  return (
    <>
    <ClientSignup
      addAccounts={addAccounts}
      newFirstName = {newFirstName}
      setNewFirstName = {setNewFirstName}
      newLastName = {newLastName}
      setNewLastName = {setNewLastName}
      newEmail = {newEmail}
      setNewEmail = {setNewEmail}
      newPassword = {newPassword}
      setNewPassword = {setNewPassword}
    />
    </>
  );
};

export default ClientSignUpContainer;
