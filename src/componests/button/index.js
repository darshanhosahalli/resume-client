import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.css';

const Button = (props) => {
    const classString = `ui ${props.huge? 'huge' : ''} ${props.icon? 'labeled icon' : ''} primary ${props.inverted? 'basic' : ''} button`;
    const icon = `${props.icon} icon`;
    if(props.href) {
        return <Link to={props.href} className={classString}>{props.children}</Link>;
    }
    return <div className="button-margin">
        <button className={classString}>
            {props.children}
            {props.icon? <i className={icon}></i> : ''}
        </button>
    </div>;
}

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    type: PropTypes.string.isRequired,
    huge: PropTypes.string,
    icon: PropTypes.string
}

export default Button;