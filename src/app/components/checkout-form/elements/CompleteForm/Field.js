import React from "react";

export default function Field({
  form,
  sendEmail,
  inputClass,
  handleFieldChange,
  errorMessages,
}) {
  return (
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
          required
        />
        {errorMessages.from_name && (
          <span
            id="name-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          aria-describedby={errorMessages.from_surname ? "surname-error" : ""}
          required
        />
        {errorMessages.from_surname && (
          <span
            id="surname-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          required
        />
        {errorMessages.from_email && (
          <span
            id="email-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          aria-describedby={errorMessages.from_country ? "country-error" : ""}
          required
        />
        {errorMessages.from_country && (
          <span
            id="country-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          aria-describedby={errorMessages.from_address ? "address-error" : ""}
          required
        />
        {errorMessages.from_address && (
          <span
            id="address-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
            {errorMessages.from_address}
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
          required
        />
        {errorMessages.from_post_code && (
          <span
            id="post-code-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          required
        />
        {errorMessages.from_region && (
          <span
            id="region-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          required
        />
        {errorMessages.from_city && (
          <span
            id="city-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
          required
        />

        {errorMessages.from_phone_number && (
          <span
            id="phone-error"
            className=" text-red-500 text-sm text-start block mb-2 -mt-4"
          >
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
  );
}
