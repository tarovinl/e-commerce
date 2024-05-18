import React from "react";
import { Modal } from "react-bootstrap";

export default function PrivacyPolicy({
  showPrivacyModal,
  handleClosePrivacyModal,
}) {
  return (
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
          name, email address, shipping address, billing address, phone number,
          and payment information. <br /> <br />
          <strong>Information collected automatically: </strong>When you use the
          Website, we may automatically collect certain information about your
          device and browsing activity. This information may include your IP
          address, browser type, operating system, referring website, pages
          visited, and search terms.
          <br />
          <br />
          <strong> Information from cookies and similar technologies:</strong>
          We may use cookies and similar tracking technologies to collect
          information about your browsing activity. Cookies are small data files
          that are stored on your device when you visit a website. They can be
          used to remember your preferences, track your activity on the Website,
          and understand how you interact with our content.
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
          <br /> We may also share your information with third parties if we are
          required to do so by law or in the good faith belief that such
          disclosure is necessary to comply with a legal process, protect our
          rights, or protect the safety of others.
        </p>
        <h6>4. Data Retention</h6>
        <p>
          We will retain your information for as long as it is necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
