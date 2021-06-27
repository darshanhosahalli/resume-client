import React from 'react';
import PropTypes from 'prop-types';

const FormCard = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">{props.formTitle}</div>
            </div>
            <div class="content">
                {props.children}
            </div>
        </div>
    );
}

FormCard.propTypes = {
    children: PropTypes.node.isRequired,
    formTitle: PropTypes.string.isRequired,
}

export default FormCard;