import ComplimentService from "../../service/Compliment";
import { IRequest, IResponse } from "../../service/types";
import { logger } from "../../logger/logger";
export class ComplimentController {
    async addCompliment (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const { compliment } = req.body;
           const complimentService = new ComplimentService();
           const response = await complimentService.addCompliment(compliment);
           return res.status(200).json(response);
        } catch (error: any) {
            logger.error('>>> addCompliment error - ', error);
            return res.status(error.status).json(error);
        }
    }

    async getCompliment (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const complimentService = new ComplimentService();
           const response = await complimentService.getAllCompliments();
           return res.status(200).json(response);
        } catch (error: any) {
            logger.error('>>> getCompliment error - ', error);
            return res.status(error.status).json(error);
        }
    }
}