import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Deine Auswahl"
        appElement={document.getElementById('app')}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Deine Auswahl</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption} className="button">Okay</button>
    </Modal>
);

export default OptionModal;
