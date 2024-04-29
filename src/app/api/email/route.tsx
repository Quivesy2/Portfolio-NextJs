import {Resend} from 'resend';
import ReceiveEmail from '@/emails/receiveEmail';
import {NextResponse} from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {firstName, email, message} = await request.json();


    await resend.emails.send({
        from: 'NoReply@quintenvercruysse.be',
        to: 'quinten1606@gmail.com',
        subject: 'New email from website.',
        react: ReceiveEmail({firstName, email, message, recipient: 'quinten1606@gmail.com'}),
    });

    // Sending confirmation email to the provided email address
    await resend.emails.send({
        from: 'NoReply@quintenvercruysse.be',
        to: email,
        subject: 'Danku voor uw Bericht.',
        react: ReceiveEmail({firstName, message, email, recipient: email}),
    });

    return NextResponse.json({});
}
