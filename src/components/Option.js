import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">
            {props.count}.&nbsp;
            {props.optionText}
        </p>
        <button
            className="button button--link button--ui"
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            &times;
        </button>
    </div>
);

export default Option;
