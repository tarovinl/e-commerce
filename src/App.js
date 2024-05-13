import "./index.css";
import Promo from "./Promo.js";
import Header from "./Header.js";
import ProductContainer from "./ProductContainer.js";
import ClientLoginContainer from "./ClientLoginContainer.js";
import ClientSignUpContainer from "./ClientSignUpContainer.js";
import Footer from "./Footer.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClientEmailVerificationContainer from "./ClientEmailVerificationContainer.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  //Save Customer Accounts
  const [clientAccounts, setClientAccounts] = useState(
    JSON.parse(localStorage.getItem("customeraccs"))
  );

  const setAndSaveAccounts = (newAccount) => {
    setClientAccounts(newAccount);
    localStorage.setItem("customeraccs", JSON.stringify(newAccount));
    console.log("Save Successful");
  };

  //Add New Accounts
  const addAccounts = (firstname, lastname, email, password) => {
    const id = clientAccounts.length
      ? clientAccounts[clientAccounts.length - 1].id + 1
      : 1;
    const newCusAccount = { id, firstname, lastname, email, password };
    const listClientAccounts = [...clientAccounts, newCusAccount];
    setAndSaveAccounts(listClientAccounts);
  };

  //Change Password
  const editPassword = (email) => {
    const updateClientAccounts = clientAccounts.map((account) => {
      if (account.email === email) {
        return { ...account, password: newPassword };
      }
      return account;
    });
  };
  //Verify Email
  const verifyEmail = (email) => {
    const isEmailValid = clientAccounts.some(
      (account) => account.email === email
    );
    if (isEmailValid) {
      console.log("Email is Verified");
    } else {
      console.error("Invalid email for password change");
    }
  };

  return (
    <Router>
      <div>
        <Promo />
        <Header />
        <div>
          {isLoggedIn ? (
            <div>
              <h1 className="font-bold text-center text-3xl">Smile :D</h1>
              <ProductContainer />
            </div>
          ) : (
            <div>
              {/*<ClientLoginContainer
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                clientAccounts={clientAccounts}
                setClientAccounts={setClientAccounts}
              />
              <p>
                Don't Have Account?{""}
                <Link to="signup">Register Here!</Link>
          </p>*/}
              <Routes>
                {" "}
                {/* Moved Routes outside conditional rendering */}
                <Route
                  path="/"
                  element={
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                      <ClientLoginContainer
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        clientAccounts={clientAccounts}
                        setClientAccounts={setClientAccounts}
                      />{" "}
                      <p>{""}<Link to = "email-verification">Forogt Password</Link></p>
                      <p>
                        Don't Have Account?{""}
                        <Link to="signup">Register Here!</Link>
                      </p>
                    </div>
                  }
                />{" "}
                <Route
                  path="/signup"
                  element={
                    <>
                      <ClientSignUpContainer
                        addAccounts={addAccounts} 
                        newFirstName={newFirstName}
                        setNewFirstName={setNewFirstName}
                        newLastName={newLastName}
                        setNewLastName={setNewLastName}
                        newEmail={newEmail}
                        setNewEmail={setNewEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                      />{" "}
                      <p>
                        Already Have An Account?{""}
                        <Link to="/">Login Here!</Link>
                      </p>
                    </>
                  }
                />{" "}
                <Route
                  path = "/email-verification"
                  element={
                    <>
                    <ClientEmailVerificationContainer 
                      verifyEmail = {verifyEmail}
                    />{" "}
                    </>
                  }
                ></Route>
              </Routes>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
