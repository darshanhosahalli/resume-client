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
                <FormCard
                    formTitle='login'
                >
                    <Form>
                        <Field
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                        >
                            Email
                        </Field>
                        <Field
                            type="password"
                            name="password"
                        >
                            Password
                        </Field>
                        <Button 
                            type="submit"
                        >
                            login
                            <i class="right arrow icon"></i>    
                        </Button>
                    </Form>
                    <div class="extra content">
                        <Message>
                            <i class="icon help"></i>
                            Forgot Password? <a href="/forgot-password">Reset here</a>.
                        </Message>
                    </div>
                </FormCard>
            </DivWithBackground>
        </article>
    );
}

export default LoginPage;