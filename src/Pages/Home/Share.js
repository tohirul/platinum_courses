import React from "react";
import { Button, Modal } from "react-bootstrap";

const Share = ({ show, fn }) => {
  return (
    <Modal show={show} onHide={fn}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={fn}>
          Close
        </Button>
        <Button variant="primary" onClick={fn}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Share;
