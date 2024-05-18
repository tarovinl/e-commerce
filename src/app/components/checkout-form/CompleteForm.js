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

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleGoToHomepage = () => {
    handleCloseModal();
    dispatch(resetCart()); // Dispatch the resetCart action
  };

  const inputClass =
    "mb-6 bg-white border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-500 ";
  const sendEmail = (e) => {
    e.preventDefault();

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
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="name"
              placeholder="Surname*"
              name="from_surname"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="email"
              id="email"
              name="from_email"
              placeholder="Email*"
              //value = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="country"
              placeholder="Country*"
              from="from_country"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="address"
              placeholder="Address*"
              name="from_address"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="address-2"
              placeholder="Address (line 2)*"
              name="from_address-2"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="post-code"
              placeholder="Post code*"
              name="from_post-code"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="region"
              placeholder="Region*"
              name="from_region"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="text"
              id="town"
              placeholder="Town / City*"
              name="from_city"
              //value = {}
              //onChange = {}
              required
            />
            <input
              className={inputClass}
              type="tel"
              id="phone"
              placeholder="Phone Number (0912-345-6789)*"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
              name="from_phone_number"
              //value = {}
              //onChange = {}
              required
            />
            <button
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
