import React from 'react';
import Modal from 'react-bootstrap/Modal';

const HeroModal = (props) => {
  const handleClose = () => props.setShow(false);

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img alt='hero asdas' src={props.imageUrl}></img>
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
