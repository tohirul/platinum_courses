import React from "react";
import { Button, Modal } from "react-bootstrap";

const Share = ({ show, fn }) => {
  const handleShare = () => {
    // Replace the URL with the link you want to share
    const shareUrl = "https://enchanting-fenglisu-8eb9f5.netlify.app/";

    // Open Facebook sharing URL in a new window
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "Share on Facebook",
      "width=600,height=400"
    );
  };

  return (
    <Modal show={show} onHide={fn}>
      <Modal.Header closeButton>
        <Modal.Title>Share on Facebook</Modal.Title>
      </Modal.Header>
      <Modal.Body>Click the button below to share on Facebook:</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={fn}>
          Close
        </Button>
        <Button variant="info" onClick={handleShare}>
          Share on Facebook
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Share;
