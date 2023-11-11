import React from "react";
import { Button, Modal } from "react-bootstrap";

import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Share = ({ show, fn, shareUrl, quote }) => {
  // Replace the URL with the link you want to share
  const shareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(quote)}`;

    // Adjust width and height based on your preference
    const width = 600;
    const height = 400;

    // Calculate the center of the screen for positioning
    const left = (window.innerWidth - width) / 2 + window.screenX;
    const top = (window.innerHeight - height) / 2 + window.screenY;

    // Open a popup window with the Facebook share URL
    window.open(
      facebookShareUrl,
      "FacebookSharePopup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };
  const shareWhatsapp = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      quote
    )}%20${encodeURIComponent(shareUrl)}`;

    // Adjust width and height based on your preference
    const width = 900;
    const height = 600;

    // Calculate the center of the screen for positioning
    const left = (window.innerWidth - width) / 2 + window.screenX;
    const top = (window.innerHeight - height) / 2 + window.screenY;

    // Open a popup window with the WhatsApp share URL
    window.open(
      whatsappShareUrl,
      "WhatsAppSharePopup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };
  const shareMessenger = () => {
    const messengerShareUrl = `https://www.facebook.com/dialog/send?app_id=1255815975094440&link=${encodeURIComponent(
      shareUrl
    )}&redirect_uri=${encodeURIComponent(shareUrl)}`;

    // Adjust width and height based on your preference
    const width = 600;
    const height = 400;

    // Calculate the center of the screen for positioning
    const left = (window.innerWidth - width) / 2 + window.screenX;
    const top = (window.innerHeight - height) / 2 + window.screenY;

    // Open a popup window with the Messenger share URL
    window.open(
      messengerShareUrl,
      "MessengerSharePopup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
    // const messengerLink = `fb-messenger://share/?link=${encodeURIComponent(
    //   shareUrl
    // )}`;

    // window.location.href = messengerLink;
  };
  return (
    <Modal show={show} onHide={fn}>
      <Modal.Footer>
        <Modal.Header closeButton>
          <Modal.Title>Share on Facebook</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click the button below to share on Facebook:</Modal.Body>
        <FacebookShareButton url={shareUrl} title={quote}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} title={quote}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <Button variant="info" onClick={shareFacebook}>
          facebook
        </Button>{" "}
        <Button variant="info" onClick={shareWhatsapp}>
          whatsapp
        </Button>{" "}
        <Button variant="info" onClick={shareMessenger}>
          messenger
        </Button>{" "}
        <Button variant="secondary" onClick={fn}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Share;
