import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalComponent(message, smShow, setSmShow) {

  return (
    <div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
