import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const classString = `ui ${props.huge? 'huge' : ''} primary ${props.inverted? 'basic' : ''} button`;
    if(props.href) {
        return <Link to={props.href} className={classString}>{props.children}</Link>;
    }
    return <button className={classString}>{props.children}</button>;
}

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    type: PropTypes.string.isRequired,
    huge: PropTypes.string
}

export default Button;