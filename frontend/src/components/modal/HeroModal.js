import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './HeroModal.css';

const HeroModal = (props) => {
  const handleClose = () => props.setShow(false);

  const { height, weight } = props.hero.appearance;
  const fullName = props.hero.biography['full-name'];
  const aliases = props.hero.biography.aliases;
  const eyeColor = props.hero.appearance['eye-color'];
  const hairColor = props.hero.appearance['hair-color'];
  const workPlace = props.hero.work.base;
  const alignment = props.hero.biography.alignment;
  const capitalizedAlignment =
    alignment.charAt(0).toUpperCase() + alignment.slice(1);

  const heightCm = height[1];
  const weightKg = weight[1];

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      size='xl'
      dialogClassName='h-80'
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.hero.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row flex-container'>
            <div className='hero-image'>
              <img
                className='img-fluid rounded'
                alt='hero asdas'
                src={props.hero.image.url}
              ></img>
            </div>
            <div className='hero-info'>
              <ul>
                <li>{`Weight: ${weightKg}`}</li>
                <li>{`Height: ${heightCm}`}</li>
                <li>{`Name: ${fullName}`}</li>
                <li>{`Aliases: ${aliases}`}</li>
                <li>{`Eye color: ${eyeColor}`}</li>
                <li>{`Eye color: ${hairColor}`}</li>
                <li>{`Workplace: ${workPlace}`}</li>
                <li>{`Hero alignment: ${capitalizedAlignment}`}</li>
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
