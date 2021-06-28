import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

const Form = (props) => {
    return (
        <form class="form-content ui form">
            {props.children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired
}

export default Form;
