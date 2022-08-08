import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "96441980d89256",
      pass: "bcef790daae405"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Hélder Lima <orfeowrk@gmail.com>',
            subject,
            html: body
        });
    }
}