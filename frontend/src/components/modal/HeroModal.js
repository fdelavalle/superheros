import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './HeroModal.css';

const HeroModal = (props) => {
  const handleClose = () => props.setShow(false);

  return (
    <Modal show={props.show} onHide={handleClose} dialogClassName='modal-90w'>
      <Modal.Header closeButton>
        <Modal.Title>{props.heroName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img alt='hero asdas' src={props.imageUrl}></img>
            </div>
            <div className='col-6'>
              <h3>asdsa</h3>
              <ul>
                <li>asd</li>
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
