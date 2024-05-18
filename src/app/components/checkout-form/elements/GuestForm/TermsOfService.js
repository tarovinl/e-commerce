import React from "react";
import { Modal } from "react-bootstrap";

export default function TermsOfService({
  showTermsModal,
  handleCloseTermsModal,
}) {
  return (
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
          represent and warrant that you have the right, authority, and capacity
          to enter into these Terms and to comply with all of the terms and
          conditions set forth herein. You may not use the Service if you do not
          agree to all of the terms and conditions of these Terms.
        </p>
        <h6>2. Orders and Payment</h6>
        <p>
          When you place an order through the Service, you agree to pay the full
          amount for the order, including any applicable taxes and shipping
          fees. Köpa reserves the right to cancel any order at any time for any
          reason. We accept various payment methods as specified on the Website.
          You represent and warrant that you have the right to use any payment
          method you select during checkout.
        </p>
        <h6>3. Products and Availability</h6>
        <p>
          Köpa strives to provide accurate information on the Website, including
          product descriptions and pricing. However, there may be occasional
          errors or inaccuracies. Köpa reserves the right to correct any errors
          or inaccuracies and to change or update information at any time
          without prior notice including after you have submitted your order.
        </p>
        <h6>4. Shipping</h6>
        <p>
          Köpa will ship your order to the address you specify during checkout.
          Shipping times and costs are as specified on the Website. Köpa is not
          responsible for delays in shipping caused by factors beyond our
          control..
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
  );
}
