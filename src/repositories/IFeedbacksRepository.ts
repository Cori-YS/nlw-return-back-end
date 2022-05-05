import { ICreateFeedbackDTO } from "../DTOs/ICreateFeedbacksDTO";

export interface IFeedbacksRepository {
  create(data: ICreateFeedbackDTO): Promise<void>;
}
