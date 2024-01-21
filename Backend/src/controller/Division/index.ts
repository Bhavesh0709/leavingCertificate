import { IRequest, IResponse } from "../../service/types";
import { logger } from "../../logger/logger";
import DivisionService from "../../service/Division";
import { SuccessResponse } from "../../responseTypes/SuccessResponse";
import { FormatResponse } from "../../responseTypes/FormatResponse";
export class DivisionController {
    async addDivision (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const { division } = req.body;
           const divisionService = new DivisionService();
           const formatReponse = new FormatResponse();
           const response = await divisionService.addDivision(division);
           const data = formatReponse.format(response);
           return res.json(new SuccessResponse('Added successfully', data));
        } catch (error: any) {
            logger.error('>>> addDivision error - ', error);
            return res.status(error.status).json(error);
        }
    }

    async getDivisions (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const divisionService = new DivisionService();
           const formatReponse = new FormatResponse();
           const response = await divisionService.getAllDivisions();
           const data = formatReponse.format(response);
           return res.json(new SuccessResponse('Fetched successfully', data));
        } catch (error: any) {
            logger.error('>>> getDivisions error - ', error);
            return res.status(error.status).json(error);
        }
    }
}