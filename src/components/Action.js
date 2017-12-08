import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            Was soll ich machen?
        </button>
    </div>
);

export default Action;
