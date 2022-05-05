import { IMailService, ISendMailData } from "../IMailService";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a77e67e7a58660",
    pass: "b040352afecbd1",
  },
});

export class NodemailerMailService implements IMailService {
  async sendMail({ subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Ismélio Cori <kilaldino@gmail.com>",
      subject,
      html: body,
    });
  }
}
