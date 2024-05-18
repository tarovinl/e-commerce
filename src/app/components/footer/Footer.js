import React, { Fragment } from "react";
import Contact from "./elements/Contact";
import LegalNotice from "./elements/LegalNotice";
import Main from "./elements/Main";

function Footer() {
  return (
    <>
      <div>
        <div className="h-0.5 w-full bg-[#a6a6a6]" />
        <div className="mt-auto flex flex-col items-start justify-between gap-2 bg-cs-cream px-4 py-6 md:flex-row md:px-[7%] md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-52 font-futurabook ml-8 md:ml-14">
            <Contact />
            <LegalNotice />
          </div>
        </div>
        <Main />
      </div>
    </>
  );
}

export default Footer;
