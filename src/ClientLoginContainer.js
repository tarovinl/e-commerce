import React, { useState } from "react";
import ClientLogin from "./ClientLogin";

const ClientLoginContainer = ({
  isLoggedIn,
  setIsLoggedIn,
  clientAccounts,
  setClientAccounts
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const matchingAccount = clientAccounts.find((account) => {
      return account.email === email && account.password === password;
    });

    if (matchingAccount) {
      setIsLoggedIn(true); //Set Login
      console.log("Login Successful");
    } else {
      console.log("Invalid Credentials");
    }
  };

  return (
    <div >
      <ClientLogin
        email={email}
        setEmail={setEmail}
        setPassword={setPassword}
        password={password}
        handleLoginSubmit={handleLoginSubmit}
      />
    </div>
  );
};

export default ClientLoginContainer;
