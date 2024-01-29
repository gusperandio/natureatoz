/* eslint-disable import/no-anonymous-default-export */
import { EmailTemplate } from '@/app/components/EmailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_AKszZNZZ_JjoKHwyk4BfqAX1XXMA7EPiT');

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {

    const { email, description } = req.query;
    const KEY = process.env.KEY_TO_POST || "";

    if (req.headers['keynature'] !== KEY || req.method !== 'POST') {
      return res.status(401).json("GET OUT!");
    }
    

    const { data, error } = await resend.emails.send({
      from: 'Acme <delivered@resend.dev>',
      to: ['gustavo.sperandio25@gmail.com'],
      subject: 'Report NATURE ATOZ',
      react: EmailTemplate({ email: email, description: description }) as React.ReactElement,
    });

    res.status(200);
  } catch (error) {
    res.status(500);
  }
};
