import React, { Fragment, useState } from "react";
import TopNavbar from "../header/TopNavbar";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

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
        <h3 class="text-gray-700 text-2xl w-full md:text-3xl lg:text-4xl font-">
          Continue as guest
        </h3>

        <p class=" text-gray-700 text-base lg:text-lg mt-12">
          Complete your order without an account. You can save your details on
          the next step to make your future purchases even faster.
        </p>
        <div className="w-full my-6">
          <form onSubmit={handleSubmit}>
            <input
              class="w-full border-2 border-black rounded-lg px-3 py-3 my-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="email"
              placeholder="email"
              required
            />

            <div className="flex justify-center">
              <input
                type="checkbox"
                className="mr-3 px-3"
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
        </div>
      </div>
      <Modal
        show={showTermsModal}
        onHide={handleCloseTermsModal}
        className="font-futurabook"
      >
        <Modal.Header closeButton>
          <Modal.Title>Köpa Terms of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            These Terms of Service govern your access to and use of the Köpa
            website and the services offered by Köpa. By accessing or using the
            Service, you agree to be bound by these Terms.
          </p>
          <h6>1. Acceptance of Terms</h6>
          <p>
            You must be at least 18 years old or of legal age to enter into a
            contract to use the Service. By accessing or using the Service, you
            represent and warrant that you have the right, authority, and
            capacity to enter into these Terms and to comply with all of the
            terms and conditions set forth herein. You may not use the Service
            if you do not agree to all of the terms and conditions of these
            Terms.
          </p>
          <h6>2. Orders and Payment</h6>
          <p>
            When you place an order through the Service, you agree to pay the
            full amount for the order, including any applicable taxes and
            shipping fees. Köpa reserves the right to cancel any order at any
            time for any reason. We accept various payment methods as specified
            on the Website. You represent and warrant that you have the right to
            use any payment method you select during checkout.
          </p>
          <h6>3. Products and Availability</h6>
          <p>
            Köpa strives to provide accurate information on the Website,
            including product descriptions and pricing. However, there may be
            occasional errors or inaccuracies. Köpa reserves the right to
            correct any errors or inaccuracies and to change or update
            information at any time without prior notice including after you
            have submitted your order.
          </p>
          <h6>4. Shipping</h6>
          <p>
            Köpa will ship your order to the address you specify during
            checkout. Shipping times and costs are as specified on the Website.
            Köpa is not responsible for delays in shipping caused by factors
            beyond our control..
          </p>
          <h6>5. Returns and Refunds</h6>
          <p>
            Köpa offers a return and refund policy as specified on the Website.
            You are responsible for returning unwanted items in their original
            condition and packaging.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={showPrivacyModal}
        onHide={handleClosePrivacyModal}
        className="font-futurabook"
      >
        <Modal.Header closeButton>
          <Modal.Title>Köpa Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This Privacy Policy describes how Köpa collects, uses, and discloses
            your personal information when you visit our website and use the
            services we offer.
          </p>
          <h6>1. Information We Collect</h6>
          <p>
            We collect several types of information when you use the Service:{" "}
            <br />
            <br />
            <strong> Information you provide directly:</strong> This includes
            information you provide when you create an account, place an order,
            subscribe to our newsletter, or contact us. This may include your
            name, email address, shipping address, billing address, phone
            number, and payment information. <br /> <br />
            <strong>Information collected automatically: </strong>When you use
            the Website, we may automatically collect certain information about
            your device and browsing activity. This information may include your
            IP address, browser type, operating system, referring website, pages
            visited, and search terms.
            <br />
            <br />
            <strong> Information from cookies and similar technologies:</strong>
            We may use cookies and similar tracking technologies to collect
            information about your browsing activity. Cookies are small data
            files that are stored on your device when you visit a website. They
            can be used to remember your preferences, track your activity on the
            Website, and understand how you interact with our content.
          </p>
          <h6>2. How We Use Your Information</h6>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>• To process your orders and fulfill your requests</li>
            <li>
              • To send you marketing and promotional communications (with your
              consent)
            </li>
            <li>• To prevent fraud and maintain the security of the Website</li>
            <li>• To improve the Website and Service</li>
            <li>• To analyze trends and usage patterns</li>
          </ul>
          <h6>3. Sharing Your Information</h6>
          <p>
            We may share your information with third-party service providers who
            help us operate the Website and provide the Service. These service
            providers are contractually obligated to keep your information
            confidential and secure and to use it only for the purposes we have
            specified. <br />
            <br /> We may also share your information with third parties if we
            are required to do so by law or in the good faith belief that such
            disclosure is necessary to comply with a legal process, protect our
            rights, or protect the safety of others.
          </p>
          <h6>4. Data Retention</h6>
          <p>
            We will retain your information for as long as it is necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Footer />
    </Fragment>
  );
}

export default GuestForm;
