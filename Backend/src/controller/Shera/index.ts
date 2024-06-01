import { IRequest, IResponse } from '../../service/types';
import { logger } from '../../logger/logger';
import { SuccessResponse } from '../../responseTypes/SuccessResponse';
import { FormatResponse } from '../../responseTypes/FormatResponse';
import { BadRequestResponse } from '../../responseTypes/BadRequestResponse';
import SheraService from '../../service/Shera';
export class SheraController {
    async addShera(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const { shera } = req.body;
            const sheraService = new SheraService();
            const formatReponse = new FormatResponse();
            const response = await sheraService.addShera(shera);
            const data = formatReponse.format(response);
            return res.json(new SuccessResponse('Added successfully', data));
        } catch (error: any) {
            logger.error('>>> addDivision error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.json(new BadRequestResponse('Bad data provided', errors.data));
        }
    }

    async getSheras(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const sheraService = new SheraService();
            const formatReponse = new FormatResponse();
            const response = await sheraService.getAllSheras();
            const data = formatReponse.format(response);
            return res.json(new SuccessResponse('Fetched successfully', data));
        } catch (error: any) {
            logger.error('>>> getDivisions error - ', error);
            return res.status(error.status).json(error);
        }
    }
}
