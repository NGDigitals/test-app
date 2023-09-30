import React from 'react';

const ActionLink = (props) => {
    return (
        <a href={props.link} style={props.style} 
                onClick={(e) => props.onClick(e)}>
            {props.text}
        </a>
    );
};

export default ActionLink;