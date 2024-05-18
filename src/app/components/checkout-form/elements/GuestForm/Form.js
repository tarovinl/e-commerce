import React from "react";

export default function Form({
  handleSubmit,
  handleAgreementChange,
  handleTermsModal,
  handlePrivacyModal,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        class="w-full border-2 border-black rounded-lg px-3 py-3 my-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="email"
        placeholder="janedoe@gmail.com"
        required
      />

      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          className="mr-3 px-3 w-4 h-4"
          onChange={handleAgreementChange}
        />
        <label class="text-gray-700">
          I have read and agree to{" "}
          <a
            class="decoration-blue-900 no-underline hover:cursor-pointer"
            onClick={handleTermsModal}
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            class="decoration-blue-900 no-underline hover:cursor-pointer"
            onClick={handlePrivacyModal}
          >
            Privacy Policy
          </a>{" "}
        </label>
      </div>
      <div className="flex justify-content">
        <button
          class="w-full text-white text-center bg-custom-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 "
          type="submit"
        >
          Continue order
        </button>
      </div>
    </form>
  );
}
