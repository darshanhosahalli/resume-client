import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';

const LoginPage = () => {
    return (
        <article>
            <Helmet>
                <title>Login</title>
                <meta
                    name="Login page for rèsume page"
                    content="login page for app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground src={background}>
                <div>
                    "Hi there, this is login page"
                </div>
            </DivWithBackground>
        </article>
    );
}

export default LoginPage;