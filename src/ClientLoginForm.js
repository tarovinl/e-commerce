

const ClientLoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLoginSubmit,
  clientAccounts
}) => {
  const InputClass =  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const LabelClass = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const FormClass = "space-y-3 md:space-y-3"
  const ButtonClass = "w-full text-black bg-white-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";

  return (
    <form className={FormClass} onSubmit={handleLoginSubmit}>
      <label className = {LabelClass} htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        className = {InputClass}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className = {LabelClass} htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        className={InputClass}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className = {ButtonClass}>Submit</button>
    </form>
  );
};

export default ClientLoginForm;
