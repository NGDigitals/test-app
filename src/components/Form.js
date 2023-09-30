import React from 'react';
import PropTypes from "prop-types";

const Form = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Person Name:
                <input type="text" name="name" />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isAvailable: PropTypes.oneOf([true, false]),
    option: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        // PropTypes.instanceOf(Person)
    ])
};

export default Form;