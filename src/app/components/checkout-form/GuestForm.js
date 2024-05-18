import React, { Fragment, useState } from "react";
import TopNavbar from "../header/TopNavbar";
import { Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Title from "./elements/GuestForm/Title";
import Detail from "./elements/GuestForm/Detail";
import Form from "./elements/GuestForm/Form";
import TermsOfService from "./elements/GuestForm/TermsOfService";
import PrivacyPolicy from "./elements/GuestForm/PrivacyPolicy";

function GuestForm() {
  const navigate = useNavigate();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCloseTermsModal = () => setShowTermsModal(false);
  const handleClosePrivacyModal = () => setShowPrivacyModal(false);
  const handleTermsModal = () => setShowTermsModal(true);
  const handlePrivacyModal = () => setShowPrivacyModal(true);
  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }
    // Proceed with form submission logic if agreed
    console.log("Form submitted successfully!");
    navigate("/completeform");
  };
  return (
    <Fragment>
      <TopNavbar />
      <div className="font-futurabook h-auto w-2/3 flex flex-col mt-16 mb-16 mx-auto items-center lg:w-1/3">
        <Title />
        <Detail />
        <div className="w-full my-6">
          <Form
            handleSubmit={handleSubmit}
            handleTermsModal={handleTermsModal}
            handlePrivacyModal={handlePrivacyModal}
            handleAgreementChange={handleAgreementChange}
          />
        </div>
      </div>
      <TermsOfService
        showTermsModal={showTermsModal}
        handleCloseTermsModal={handleCloseTermsModal}
      />
      <PrivacyPolicy
        showPrivacyModal={showPrivacyModal}
        handleClosePrivacyModal={handleClosePrivacyModal}
      />

      <Footer />
    </Fragment>
  );
}

export default GuestForm;
