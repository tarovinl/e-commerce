import React from "react";
import ClientLoginForm from "./ClientLoginForm";

const ClientLogin = ({
  email,
  setEmail,
  setPassword,
  password,
  handleLoginSubmit,
  isLoggedIn,
  setIsLoggedIn,
  clientAccounts,
}) => {
  const HeadingClass =
    "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white";

  return (
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h3 className={HeadingClass}>Login Now</h3>
      <ClientLoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLoginSubmit={handleLoginSubmit}
      />
    </div>
  );
};

export default ClientLogin;
