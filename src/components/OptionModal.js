import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Deine Auswahl"
        appElement={document.getElementById('app')}
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Deine Auswahl</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
