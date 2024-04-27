function Footer() {
  return (
    <footer>
      <div className=" b p-5 ">
        <div className="p py-theme lg:flex lg:flex-wrap lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 space-y-2 text-sm lg:flex-1">
            <div
              className={
                "text-2xl text-center flex justify-center items-center space-x-12"
              }
            >
              <p>help</p>
              <p>terms and conditions</p>
              <p>privacy policy</p>
            </div>
            <p className="text-black text-center">© 2024, kevinstore. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
