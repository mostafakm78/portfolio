import { Body, Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

interface EmailProps {
  email: string;
  name: string;
  desc: string;
}

export const Email = ({ email, name, desc }: EmailProps) => (
  <Html>
    <Head />
    <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Container style={{ backgroundColor: '#ffffff', margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <Section style={{ padding: '0 20px' }}>
          <Text style={{ color: '#525f7f', fontSize: '24px', lineHeight: '24px', textAlign: 'center', marginBottom: '12px' }}>Mostafa Kamari Portfolio</Text>
          <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <Text style={{ color: '#525f7f', fontSize: '16px', lineHeight: '24px', textAlign: 'left', marginBottom: '12px' }}>From : {name}</Text>
          <Text style={{ color: '#525f7f', fontSize: '16px', lineHeight: '24px', textAlign: 'left', marginBottom: '12px' }}>Email : {email}</Text>
          <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <Text style={{ color: '#525f7f', fontSize: '16px', lineHeight: '24px', textAlign: 'left', marginBottom: '12px' }}>Description :</Text>
          <Text style={{ color: '#525f7f', fontSize: '16px', lineHeight: '24px', textAlign: 'left', marginBottom: '12px' }}>{desc}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Email;
