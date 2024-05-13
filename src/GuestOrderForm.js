import React, { useRef } from "react";
import {useNavigate} from "react-router-dom"
import emailjs from "@emailjs/browser";

export const GuestOrderForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0mxz15r", "template_hr2j6l4", form.current, {
        publicKey: "FF08ux6H7-xfSF0HJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/order-success")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
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
          name = "from_name"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="name"
          placeholder="Surname*"
          name = "from_surname"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="email"
          id="email"
          name = "from_email"
          //value = {}
          required
        />
        <input
          type="text"
          id="country"
          placeholder="Country*"
          from = "from_country"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="address"
          placeholder="Address*"
          name = "from_address"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="address-2"
          placeholder="Address (line 2)*"
          name = "from_address-2"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="post-code"
          placeholder="Post code*"
          name = "from_post-code"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="region"
          placeholder="Region*"
          name = "from_region"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="text"
          id="town"
          placeholder="Town / City*"
          name = "from_city"
          //value = {}
          //onChange = {}
          required
        />
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number (09**-***-****)*"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
          name = "from_phone_number"
          //value = {}
          //onChange = {}
          required
        />
        <button type = "submit">Submit</button>
      </form>
    </div>
  );
};

export default GuestOrderForm;
