import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';

const RegisterPage = () => {
    return (
        <article>
            <Helmet>
                <title>Register</title>
                <meta
                    name="Register page for rèsume page"
                    content="Register page for app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground src={background}>
            </DivWithBackground>
        </article>
    );
}

export default RegisterPage;