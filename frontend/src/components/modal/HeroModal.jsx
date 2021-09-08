import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import TeamMembersContext from '../../store/teamMembers-context';

import './HeroModal.css';

const HeroModal = (props) => {
  const handleClose = () => props.setShow(false);
  const { addHero, removeHero } = useContext(TeamMembersContext);

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

  let buttonClasses;
  let buttonText;
  let functionality;

  if (props.inHome) {
    buttonClasses = 'btn btn-danger';
    buttonText = 'Delete Hero';
    functionality = removeHero;
  } else {
    buttonClasses = 'btn btn-success';
    buttonText = 'Add Hero';
    functionality = addHero;
  }

  const updateTeamHandler = () => {
    functionality(props.hero);
    handleClose();
  };

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
        <button className='btn btn-outline-danger' onClick={handleClose}>
          Close
        </button>
        <button onClick={updateTeamHandler} className={buttonClasses}>
          {buttonText}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default HeroModal;
