import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';
import SkillBoard from '../../componests/SkillBoard';
import ExperienceBoard from '../../componests/ExpressBoard';

const ResumePage = () => {
    return (
        <article>
            <Helmet>
                <title>Resume Page</title>
                <meta
                    name="Resume page for rèsume page"
                    content="Resume page for app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground>
                <ExperienceBoard />
            </DivWithBackground>
        </article>
    );
}

export default ResumePage;