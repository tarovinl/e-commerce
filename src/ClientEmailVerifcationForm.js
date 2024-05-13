import React from "react";

const ClientEmailVerifcationForm = ({verifyEmail, email, setEmail}) => {
  return (
    <form onSubmit={verifyEmail}>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Verify</button>
    </form>
  );
};

export default ClientEmailVerifcationForm;
