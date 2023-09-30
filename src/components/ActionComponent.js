import React from 'react';

const ActionComponent = (props) => {
    return (
        <a href={props.link} onClick={(e) => props.onClick(e)}>
            {props.text}
        </a>
    );
};

export default ActionComponent;