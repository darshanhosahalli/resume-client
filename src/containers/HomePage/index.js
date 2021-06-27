import React from 'react';
import HeaderContainer from '../HeaderContainer';
import { Helmet } from 'react-helmet';
import Button from '../../componests/button';
import Heading from '../../componests/Heading';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';

const HomePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Rèsume</title>
                <meta
                    name="online application to create resume"
                    content="app to create resume"
                />
            </Helmet>
            <HeaderContainer/>
            <section>
                <DivWithBackground src={background}>
                    <Heading>
                        Create a Perfect Resume
                    </Heading>
                    <h2 class="ui large header">For a Perfect Job</h2>
                    <Button href='/register' huge={true}>
                        Get Started <i class="right arrow icon"></i>
                    </Button>
                </DivWithBackground>
            </section>
        </React.Fragment>
    );
}

export default HomePage;