import { logger } from "../../logger/logger";
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
            return res.status(error.status).json(error);
        }
    }
}