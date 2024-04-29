import {Body, Container, Head, Html, Row, Section, Text} from '@react-email/components';
import * as React from 'react';

interface UserEmailProps {
    firstName: string;
    email: string;
    message: string;
    recipient: string;
}

export const ReceiveEmail = ({firstName, email, message, recipient}: UserEmailProps) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Container style={container}>
                <Section style={{paddingBottom: '20px'}}>
                    <Row>
                        {recipient === 'quinten1606@gmail.com' ? (
                            <Text style={heading}>Hey {firstName} heeft de form ingevuld</Text>
                        ) : (
                            <Text style={heading}>danku {firstName} voor het invullen van de form. </Text>
                        )}
                        <Text style={review}>{message}</Text>
                    </Row>
                </Section>
                <Section>
                    <Row>
                        <Text style={{...paragraph, fontWeight: '700'}}>ingegeven adress: {email}</Text>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
    maxWidth: '100%',
};

const heading = {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
};

const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
};

const review = {
    ...paragraph,
    padding: '24px',
    backgroundColor: '#f2f3f3',
    borderRadius: '4px',
};

export default ReceiveEmail;
