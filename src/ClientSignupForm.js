import React from "react";

const ClientSignupForm = ({
  handleSignUpSubmit,
  newFirstName,
  setNewFirstName,
  newLastName,
  setNewLastName,
  newEmail,
  setNewEmail,
  newPassword,
  setNewPassword,
}) => {
  const FixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
  return (
    <form onSubmit={handleSignUpSubmit}>
      <input
        type="firstname"
        id="firstname"
        className={FixedInputClass}
        placeholder="First Name"
        value={newFirstName}
        onChange={(e) => setNewFirstName(e.target.value)}
        required
      />
      <input
        type="lastname"
        id="lastname"
        className={FixedInputClass}
        placeholder="Last Name"
        value={newLastName}
        onChange={(e) => setNewLastName(e.target.value)}
        required
      />
      <input
        type="email"
        id="email"
        className={FixedInputClass}
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        required
      />
      <input
        type="password"
        id="password"
        className={FixedInputClass}
        placeholder="Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientSignupForm;
