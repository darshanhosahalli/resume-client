import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
    return (
        <div class="field">
            <label>{props.children}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}

Field.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Field;