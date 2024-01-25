import { logger } from "../../logger/logger";
import { TBirthDetails } from "../../models/BirthDetails/types";
import { FormatResponse } from "../../responseTypes/FormatResponse";
import { SuccessResponse } from "../../responseTypes/SuccessResponse";
import BirthInfo from "../../service/BirthDetails";
import { IRequest, IResponse } from "../../service/types";

export class BirthDetailsController {
    async getBirthInfo (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const birthInfo = new BirthInfo();
           const formatResponse = new FormatResponse();
           const response = await birthInfo.getAllDetails(); 
           const data = formatResponse.format(response);
           return res.json(new SuccessResponse('Fetched successfully', data));
        } catch (error: any) {
            logger.error('>>> getBirthInfo error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.status(errors.status).json(errors.data);
        }
    }

    async addBirthInfo (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const { birthPlace, taluka, district, state, country } = req.body;
           const details: TBirthDetails = {
              birthPlace,
              taluka,
              district,
              state,
              country
           };
           const birthInfo = new BirthInfo();
           const formatResponse = new FormatResponse();
           const response = await birthInfo.addAllDetails(details); 
           const data = formatResponse.format(response);
           return res.json(new SuccessResponse('Successfully added', data));
        } catch (error: any) {
            logger.error('>>> addBirthInfo error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.status(errors.status).json(errors.data);
        }
    }
}