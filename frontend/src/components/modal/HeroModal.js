import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './HeroModal.css';

const HeroModal = (props) => {
  const handleClose = () => props.setShow(false);

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      size='xl'
      dialogClassName='h-80'
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.heroName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row flex-container'>
            <div className='hero-image'>
              <img
                className='img-fluid'
                alt='hero asdas'
                src={props.imageUrl}
              ></img>
            </div>
            <div className='hero-info'>
              <h3>asdsa</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vero, corrupti.
                </li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger' onClick={handleClose}>
          Close
        </button>
        <button className='btn btn-success' onClick={handleClose}>
          Add Hero
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default HeroModal;
