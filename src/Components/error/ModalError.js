import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalError.css'

function ModalError() {
  const [open, setOpenModal] = useState(false)

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </div>
  </div>
  );
    }
export default ModalError