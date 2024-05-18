import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/CartSlice";
import { useRef } from "react";
import Footer from "../../components/footer/Footer";
import TopNavbar from "../../components/header/TopNavbar";

import emailjs from "@emailjs/browser";

function CompleteForm() {
  const form = useRef();
  const [errorMessages, setErrorMessages] = useState({ name: "" });

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleGoToHomepage = () => {
    handleCloseModal();
    dispatch(resetCart()); // Dispatch the resetCart action
  };

  const validateField = (name, value) => {
    let message = "";
    if (!value) {
      message = "This field is required.";
    } else {
      if (name === "from_name") {
        const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
        if (!nameRegex.test(value)) {
          message = "Please enter a valid name (letters and spaces only).";
        }
      }
    }
    return message;
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const message = validateField(name, value);
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: message,
    }));
  };

  const inputClass =
    "mb-6 bg-white border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-500 " ;

  const handleNameChange = (event) => {
    const name = event.target.value;

    // Regular expression for basic name validation (letters and spaces)
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    // Check if the name is empty or invalid
    if (!name || !nameRegex.test(name)) {
      setErrorMessages({
        ...errorMessages,
        name: "Please enter a valid name (letters and spaces only).",
      });
    } else {
      setErrorMessages({ ...errorMessages, name: "" }); // Clear error message if name is valid
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const formElements = form.current.elements;
    let formIsValid = true;
    let newErrorMessages = {};

    // Validate all fields
    for (let element of formElements) {
      if (element.name) {
        const message = validateField(element.name, element.value);
        if (message) {
          formIsValid = false;
          newErrorMessages[element.name] = message;
        }
      }
    }

    setErrorMessages(newErrorMessages);

    if (!formIsValid) {
      console.log("Submit Fail");
      return;
    }

    emailjs
      .sendForm("service_0mxz15r", "template_hr2j6l4", form.current, {
        publicKey: "FF08ux6H7-xfSF0HJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleShowModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Fragment>
      <TopNavbar />
      <div className="font-futurabook h-full w-2/3 justify-center items-center flex flex-col mx-auto my-auto px-3 py-3 lg:w-1/2">
        <div className="flex flex-col justify-center text-center">
          <p className="text-slate-400">
            For customs purposes, you must enter the following details in latin
            characters.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className={inputClass}
              type="text"
              id="name"
              placeholder="Name*"
              name="from_name"
              onChange={handleFieldChange}
              aria-describedby={errorMessages.from_name ? "name-error" : ""}
            />
            {errorMessages.from_name && (
              <span id="name-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_name}
              </span>
            )}

            <input
              className={inputClass} 
              type="text"
              id="surname"
              placeholder="Surname*"
              name="from_surname"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_surname ? "surname-error" : ""
              }
            />
            {errorMessages.from_surname && (
              <span id="surname-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_surname}
              </span>
            )}

            <input
              className={inputClass}
              type="email"
              id="email"
              name="from_email"
              placeholder="Email*"
              onChange={handleFieldChange}
              aria-describedby={errorMessages.from_email ? "email-error" : ""}
            />
            {errorMessages.from_email && (
              <span id="email-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_email}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="country"
              placeholder="Country*"
              name="from_country"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_country ? "country-error" : ""
              }
            />
            {errorMessages.from_country && (
              <span id="country-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_country}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="address"
              placeholder="Address*"
              name="from_address"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_address ? "address-error" : ""
              }
            />
            {errorMessages.from_address && (
              <span id="address-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_address}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="address-2"
              placeholder="Address (line 2)*"
              name="from_address-2"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_address_2 ? "address-2-error" : ""
              }
            />
            {errorMessages.from_address_2 && (
              <span id="address-2-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_address_2}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="post-code"
              placeholder="Post code*"
              name="from_post_code"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_post_code ? "post-code-error" : ""
              }
            />
            {errorMessages.from_post_code && (
              <span id="post-code-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_post_code}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="region"
              placeholder="Region*"
              name="from_region"
              onChange={handleFieldChange}
              aria-describedby={errorMessages.from_region ? "region-error" : ""}
            />
            {errorMessages.from_region && (
              <span id="region-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_region}
              </span>
            )}

            <input
              className={inputClass}
              type="text"
              id="town"
              placeholder="Town / City*"
              name="from_city"
              onChange={handleFieldChange}
              aria-describedby={errorMessages.from_city ? "city-error" : ""}
            />
            {errorMessages.from_city && (
              <span id="city-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_city}
              </span>
            )}

            <input
              className={inputClass}
              type="tel"
              id="phone"
              placeholder="Phone Number (0912-345-6789)*"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
              name="from_phone_number"
              onChange={handleFieldChange}
              aria-describedby={
                errorMessages.from_phone_number ? "phone-error" : ""
              }
            />
            {errorMessages.from_phone_number && (
              <span id="phone-error" className=" text-red-500 text-sm text-start block mb-2 -mt-4">
                {errorMessages.from_phone_number}
              </span>
            )}

            <button
              disabled={Object.values(errorMessages).some(
                (message) => message !== ""
              )}
              type="submit"
              className="w-full text-white text-center hover:bg-black
              bg-custom-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 "
            >
              Continue order
            </button>
          </form>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="font-futurabook"
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-left text-lg ">
            Thanks for your order! We've received it and sent a notification
            email to our admin team for confirmation. You'll receive a separate
            email confirmation once your order is reviewed and approved. This
            email will include your order details and estimated delivery
            timeframe.
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button
              variant="secondary"
              onClick={handleGoToHomepage}
              className=""
            >
              Go to Homepage
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <Footer />
    </Fragment>
  );
}

export default CompleteForm;
