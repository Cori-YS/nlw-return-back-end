export interface ISendMailData {
  subject: string;
  body: string;
}

export interface IMailService {
  sendMail(data: ISendMailData): Promise<void>;
}
