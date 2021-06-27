import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
    return (
        <form class="ui form">
            {props.children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired
}

export default Form;
