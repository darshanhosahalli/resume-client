import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';
import FormCard from '../../componests/FormCard';
import Form from '../../componests/form';
import Field from '../../componests/field';
import Button from '../../componests/button';
import Message from '../../componests/Warning';
import Divider from '../../componests/divider';

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
                <FormCard
                    formTitle='Register'
                >
                    <Form>
                        <Field
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            icon="user"
                        >
                            Full Name
                        </Field>
                        <Field
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                            icon="envelope"
                        >
                            Email
                        </Field>
                        <Field
                            type="password"
                            name="password"
                            icon="lock"
                        >
                            Password
                        </Field>
                        <Button 
                            type="submit"
                        >
                            Signup
                            <i class="right arrow icon"></i>    
                        </Button>
                    </Form>
                    <Divider />
                    <div class="extra content">
                        <Message>
                            <i class="icon help"></i>
                            Already signed up? <a href="/login">Login here</a>.
                        </Message>
                    </div>
                </FormCard>
            </DivWithBackground>
        </article>
    );
}

export default RegisterPage;