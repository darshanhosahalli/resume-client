import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-2.jpeg';

const NotFoundPage = () => {
    return (
        <article>
            <Helmet>
                <title>404</title>
                <meta
                    name="Not Found page"
                    content="Not Found Page For Rèsume app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground src={background}>
            </DivWithBackground>
        </article>
    );
}

export default NotFoundPage;