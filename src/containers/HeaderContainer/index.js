import React from 'react';
import Button from '../../componests/button';
import Header from '../../componests/header';
import Logo from '../../componests/image/logo';

const HeaderContainer = () => {
    return (
        <Header>
            <Logo
                alt="logo"
                src="https://resume.win.tue.nl/images/logo.png?c0b0d6fef1494fee6bb16b50a463ee3a"
            ></Logo>
            <div class="right item">
                <div class="ui input">
                    <Button href='/login'>Login</Button>
                    <Button
                        href='/register'
                        inverted={true}    
                    >Register</Button>
                </div>
            </div>
        </Header>
    );
}

export default HeaderContainer;