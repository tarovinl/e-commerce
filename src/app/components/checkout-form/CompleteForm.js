import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/CartSlice";

function CompleteForm() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleGoToHomepage = () => {
    handleCloseModal();
    dispatch(resetCart()); // Dispatch the resetCart action
  };

  return (
    <Fragment>
      <h1>Complete form</h1>
      <Link to="/completeform">
        <Button onClick={handleShowModal}>Continue order</Button>
      </Link>

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
