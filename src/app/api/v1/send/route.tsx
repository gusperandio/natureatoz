/* eslint-disable import/no-anonymous-default-export */
import { limiterEmail } from '@/lib/config/limiter_email';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { Counter } from '@/lib/count';
const countMongoDB = new Counter();
export async function POST(request: Request) {

  try {
    const origin = request.headers.get('origin');
    const KEY = process.env.KEY_TO_POST || "";
    if (request.headers.get('keynature') !== KEY) {
      return new NextResponse("GET OUT!", {
        status: 401,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }

    const remaining = await limiterEmail.removeTokens(3);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    } else {
      await countMongoDB.updateReqCount();
    }

    const { searchParams } = new URL(request.url);
    const keySendGrid = process.env.SEND_API_KEY || ""
    sgMail.setApiKey(keySendGrid);
    const description = searchParams.get('description');
    const email = searchParams.get('email');
    const msg = {
      to: 'gustavo.sperandio25@gmail.com',
      from: 'gustavo.sperandio25@gmail.com', 
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<h1>HELLO</h1>`,
    };

    sgMail
      .send(msg)
      .then((resp)=>{ })
      .catch((error: any)=>{})

    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  } catch (error) {
    return new NextResponse("Error in system, report please in https://natureatoz.com.br/report", {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
};
