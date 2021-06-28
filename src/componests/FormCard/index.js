import React from 'react';
import PropTypes from 'prop-types';
import './formcard.css';

const FormCard = (props) => {
    return (
        <div class="ui card">
            <div class="card-content content">
                <div class="form-card header">{props.formTitle}</div>
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