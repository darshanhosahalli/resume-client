import React from 'react';
import PropTypes from 'prop-types';
import './field.css';
import reactDom from 'react-dom';

const Field = (props) => {
    const icon = `${props.icon} icon`;
    return (
        <div className="field-margin">
            <label>
                {props.children}
            </label>
            <div className="ui labeled left icon input">
                <input type={props.type} name={props.name} placeholder={props.placeholder}/>
                <i className={icon}></i>
            </div>
        </div>
    );
}

Field.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.string.isRequired
}

export default Field;