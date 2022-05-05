import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";
import { IMailService } from "../services/IMailService";

interface IRequestFeedbacks {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailService: IMailService
  ) {}

  async execute({ type, comment, screenshot }: IRequestFeedbacks) {
    this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.mailService.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
