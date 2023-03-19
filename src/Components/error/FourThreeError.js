import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './FourThreeError.css'

function FourThreeError() {
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
          <img src='./403error.jpg' alt='error' className='picerror403'></img>
    </div>
    </div>
  </Modal>
  );
    }
export default FourThreeError