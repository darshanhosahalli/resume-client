import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '../HeaderContainer';
import DivWithBackground from '../../componests/image/background-image';
import background from '../../images/background-1.png';
import FormCard from '../../componests/FormCard';
import Form from '../../componests/form';
import Field from '../../componests/field';
import Button from '../../componests/button';

const ForgotPassword = () => {
    return (
        <article>
            <Helmet>
                <title>ForgotPassword</title>
                <meta
                    name="Forgot password page for rèsume page"
                    content="Forgot password page for app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground src={background}>
                <FormCard
                    formTitle='resent password'
                >
                    <Form>
                        <Field
                            type="email"
                            name="email"
                            icon="envelope"
                        >
                            Registered Email
                        </Field>
                        <Button 
                            type="submit"
                        >
                            submit
                            <i class="right arrow icon"></i>    
                        </Button>
                        <Field
                            type="text"
                            name="otp"
                        >
                            Enter the otp sent to your email
                        </Field>
                        <Field
                            type="text"
                            name="newPassword"
                            icon="lock"
                        >
                            New password
                        </Field>
                        <Field
                            type="text"
                            name="oldPassword"
                            icon="lock"
                        >
                            Old password
                        </Field>
                        <Button 
                            type="submit"
                        >
                            submit
                            <i class="right arrow icon"></i>    
                        </Button>
                    </Form>
                </FormCard>
            </DivWithBackground>
        </article>
    );
}

export default ForgotPassword;