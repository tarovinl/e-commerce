import React from "react";

const GuestOrder = () => {
  return (
    <div>
      <h1>Continue as guest</h1>
      <p>
        Complete your order without an account. You can save your <br />
        details on the next step to make your future purchases even faster.
      </p>
      <form>
        <input type="email" id="email" placeholder="Enter as email" required />
        <button type="submit">Continue order</button>
      </form>
      <p>By continuing you accept our Privacy Policy.</p>
    </div>
  );
};

export default GuestOrder;
