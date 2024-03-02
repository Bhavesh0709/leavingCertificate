import ComplimentService from '../../service/Compliment';
import { IRequest, IResponse } from '../../service/types';
import { logger } from '../../logger/logger';
import { SuccessResponse } from '../../responseTypes/SuccessResponse';
import { FormatResponse } from '../../responseTypes/FormatResponse';
import { BadRequestResponse } from '../../responseTypes/BadRequestResponse';
export class ComplimentController {
    async addCompliment(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const { compliment } = req.body;
            const complimentService = new ComplimentService();
            const formatResponse = new FormatResponse();
            const response = await complimentService.addCompliment(compliment);
            const data = formatResponse.format(response);
            return res.json(new SuccessResponse('Added successfully', data));
        } catch (error: any) {
            logger.error('>>> addCompliment error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.json(new BadRequestResponse('Bad data provided', errors.data));
        }
    }

    async getCompliment(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const complimentService = new ComplimentService();
            const formatResponse = new FormatResponse();
            const response = await complimentService.getAllCompliments();
            const data = formatResponse.format(response);
            return res.json(new SuccessResponse('Fetched successfully', data));
        } catch (error: any) {
            logger.error('>>> getCompliment error - ', error);
            return res.status(error.status).json(error);
        }
    }
}
