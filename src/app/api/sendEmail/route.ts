import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '../../../../emails';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, description } = await req.json();

    if (!name || !email || !description) {
      return NextResponse.json({ message: 'همه فیلدها اجباری هستند.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'PortFolio <onboarding@resend.dev>',
      to: ['mostafamf555@gmail.com'],
      subject: 'Message from Portfolio Contact Form',
      react: Email({ name, email, desc: description }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: 'ایمیل با موفقیت ارسال شد!',
        success: true,
        data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: 'خطا در ارسال ایمیل', error: error.message }, { status: 500 });
  }
}
