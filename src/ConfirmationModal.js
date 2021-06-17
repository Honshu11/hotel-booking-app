import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function ConfirmationModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btn-primary btn" onClick={handleShow}>
        Submit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Is the information below correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>FirstName: {props.bookingInformation.firstName}</p>
            <p>LastName: {props.bookingInformation.lastName}</p>
            <p>Email: {props.bookingInformation.email}</p>
            <p>Address: {props.bookingInformation.address}</p>
            <p>Guests: {props.bookingInformation.guests}</p>
            <p>Rooms: {props.bookingInformation.rooms}</p>
            <p>Nights: {props.bookingInformation.nights}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-primary btn" onClick={handleClose}>
            {" "}
            Confirm{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
