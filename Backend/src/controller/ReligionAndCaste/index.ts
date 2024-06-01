import { IRequest, IResponse } from '../../service/types';
import { logger } from '../../logger/logger';
import { SuccessResponse } from '../../responseTypes/SuccessResponse';
import { FormatResponse } from '../../responseTypes/FormatResponse';
import { BadRequestResponse } from '../../responseTypes/BadRequestResponse';
import ReligionAndCaste from '../../service/ReligionAndCastes';
export class ReligionAndCasteController {
    async addReligionAndCastes(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const { religion, caste, subCaste } = req.body;
            const religionAndCaste = new ReligionAndCaste();
            const formatReponse = new FormatResponse();
            const response = await religionAndCaste.addReligionAndCaste(religion, caste, subCaste);
            const data = formatReponse.format(response);
            return res.json(new SuccessResponse('Added successfully', data));
        } catch (error: any) {
            logger.error('>>> addDivision error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.json(new BadRequestResponse('Bad data provided', errors.data));
        }
    }

    async getAllReligionAndCastes(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const religionAndCaste = new ReligionAndCaste();
            const formatReponse = new FormatResponse();
            const response = await religionAndCaste.getAllReligionAndCaste();
            const data = formatReponse.format(response);
            return res.json(new SuccessResponse('Fetched successfully', data));
        } catch (error: any) {
            logger.error('>>> getDivisions error - ', error);
            return res.status(error.status).json(error);
        }
    }
}
