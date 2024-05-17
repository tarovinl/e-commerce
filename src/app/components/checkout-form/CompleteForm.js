import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/CartSlice";
import { useRef } from "react";

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
      <h1>Complete form</h1>
      <div>
        <p>
          For customs purposes, you must enter the following details in latin
          characters.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
            placeholder="Name*"
            name="from_name"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="name"
            placeholder="Surname*"
            name="from_surname"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="email"
            id="email"
            name="from_email"
            //value = {}
            required
          />
          <input
            type="text"
            id="country"
            placeholder="Country*"
            from="from_country"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="address"
            placeholder="Address*"
            name="from_address"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="address-2"
            placeholder="Address (line 2)*"
            name="from_address-2"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="post-code"
            placeholder="Post code*"
            name="from_post-code"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="region"
            placeholder="Region*"
            name="from_region"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="text"
            id="town"
            placeholder="Town / City*"
            name="from_city"
            //value = {}
            //onChange = {}
            required
          />
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number (09**-***-****)*"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            name="from_phone_number"
            //value = {}
            //onChange = {}
            required
          />
          <button type="submit">Continue order</button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-justify">
            Thanks for your order! We've received it and sent a notification
            email to our admin team for confirmation. You'll receive a separate
            email confirmation once your order is reviewed and approved. This
            email will include your order details and estimated delivery
            timeframe.
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary" onClick={handleGoToHomepage}>
              Go to Homepage
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CompleteForm;
