import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OrderConfirm({
  showModal,
  handleCloseModal,
  handleGoToHomepage,
}) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="font-futurabook"
    >
      <Modal.Header>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-left text-lg ">
          Thanks for your order! We've received it and sent a notification email
          to our admin team for confirmation. You'll receive a separate email
          confirmation once your order is reviewed and approved. This email will
          include your order details and estimated delivery timeframe.
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="secondary" onClick={handleGoToHomepage} className="">
            Go to Homepage
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
