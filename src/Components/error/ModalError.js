import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './ModalError.css'

function ModalError() {
  const [show, setShow] = useState(true);
  let navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
    navigate("/")
  };

  return (
    <Modal show={show} onHide={handleClose} className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => handleClose()}>
          X
        </button>
      </div>
      <div className="title">

          <img src='./400error.png' alt='error' className='picerror'></img>

    </div>
    </div>
  </Modal>
  );
    }
export default ModalError