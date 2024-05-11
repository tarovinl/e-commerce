
import ClientSignupForm from "./ClientSignupForm";

const ClientSignup = ({
  addAccounts,
  newFirstName,
  setNewFirstName,
  newLastName,
  setNewLastName,
  newEmail,
  setNewEmail,
  newPassword,
  setNewPassword,
}) => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!newFirstName || !newLastName || !newEmail || !newPassword) return;
    addAccounts(newFirstName, newLastName, newEmail, newPassword);
    setNewFirstName('');
    setNewLastName('');
    setNewEmail('');
    setNewPassword('');
    console.log("Account Created Successfull");
  };

  return (
    <div>
      <h3>Register Now</h3>
      <ClientSignupForm
        handleSignUpSubmit={handleSignUpSubmit}
        newFirstName = {newFirstName}
        setNewFirstName = {setNewFirstName}
        newLastName = {newLastName}
        setNewLastName = {setNewLastName}
        newEmail = {newEmail}
        setNewEmail = {setNewEmail}
        newPassword = {newPassword}
        setNewPassword = {setNewPassword}
      />
    </div>
  );
};

export default ClientSignup;
