import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/CartSlice";
import { useRef } from "react";
import Footer from "../../components/footer/Footer";
import TopNavbar from "../../components/header/TopNavbar";
import Field from "./elements/CompleteForm/Field";
import OrderConfirm from "./elements/CompleteForm/OrderConfirm";

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
    "mb-6 bg-white border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-500 ";

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
        <Field
          errorMessages={errorMessages}
          form={form}
          sendEmail={sendEmail}
          inputClass={inputClass}
          handleFieldChange={handleFieldChange}
        />
      </div>
      <OrderConfirm
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleGoToHomepage={handleGoToHomepage}
      />
      <Footer />
    </Fragment>
  );
}

export default CompleteForm;
