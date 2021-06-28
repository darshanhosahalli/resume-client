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

const ConfirmOtp = () => {
    return (
        <article>
            <Helmet>
                <title>Confirm Otp</title>
                <meta
                    name="Confirm Otp page for rèsume page"
                    content="confirm OTP page for app"
                />
            </Helmet>
            <HeaderContainer/>
            <DivWithBackground src={background}>
                <FormCard
                    formTitle='Confirm Otp'
                >
                    <Form>
                        <Field
                            type="text"
                            name="otp"
                        >
                            Otp
                        </Field>
                        <Button 
                            type="submit"
                        >
                            submit
                            <i class="right arrow icon"></i>    
                        </Button>
                    </Form>
                    <Divider />
                    <div class="extra content">
                        <Message>
                            <i class="icon help"></i>
                            <a href="/">Resend Otp</a>
                        </Message>
                    </div>
                </FormCard>
            </DivWithBackground>
        </article>
    );
}

export default ConfirmOtp;