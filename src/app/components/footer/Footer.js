import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div>
        <div className="h-0.5 w-full bg-[#a6a6a6]" />
        <div className="mt-auto flex flex-col items-start justify-between gap-2 bg-cs-cream px-4 py-6 md:flex-row md:px-[7%] md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-52 font-futurabook ml-14">
            <div className="mb-0 flex w-full flex-col items-start md:mb-0 ">
              <span className="text-sm mb-4">Customer Service</span>

              <span className="text-sm mb-2 text-gray-500">Contact us</span>
              <span className="text-sm mb-2 text-gray-500">Shipping</span>
              <span className="text-sm mb-2 text-gray-500">Tax</span>
              <span className="text-sm mb-2 text-gray-500">
                Exchanges/Returns
              </span>
              <span className="text-sm mb-2 text-gray-500">
                Track Your Order
              </span>
              <span className="text-sm mb-2 text-gray-500">Cancel Order</span>

              <span className="text-sm mb-2 text-gray-500">
                Certificate of Authenticity
              </span>
              <span className="text-sm text-gray-500">FAQ</span>
            </div>
            <div className="mb-4 ml-0 flex w-full flex-col items-start md:mb-0 md:ml-10 ">
              <span className="text-sm mb-4 ">Legal Notice</span>
              <span className="text-sm mb-2 text-gray-500">Notice</span>
              <span className="text-sm mb-2 text-gray-500">Terms of Use</span>
              <span className="text-sm mb-2 text-gray-500">Privacy Policy</span>
              <span className="text-sm mb-2 text-gray-500 ">Cookie Policy</span>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-[#a6a6a6] flex justify-between  px-20 py-4 font-futurabook ">
          <h1 className=" text-sm  ">© KÖPA 2024 </h1>
          <h1 className="text-sm  ">All Rights Reserved. CICS Co. Ltd. </h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
