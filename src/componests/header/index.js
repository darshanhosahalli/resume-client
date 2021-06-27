import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './header';

const Header = (props) => {
    return <HeaderStyle>
                <div class="ui container">
                    <div class="ui large secondary menu">
                        {props.children}
                    </div>
                </div>
        </HeaderStyle>
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Header;