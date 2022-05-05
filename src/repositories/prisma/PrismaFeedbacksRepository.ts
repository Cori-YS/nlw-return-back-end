import { ICreateFeedbackDTO } from "../../DTOs/ICreateFeedbacksDTO";
import { IFeedbacksRepository } from "../IFeedbacksRepository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: ICreateFeedbackDTO): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
