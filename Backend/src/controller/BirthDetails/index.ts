import { logger } from "../../logger/logger";
import BirthInfo from "../../service/BirthDetails";
import { IRequest, IResponse } from "../../service/types";

export class BirthDetailsController {
    async getBirthInfo (req: IRequest, res: IResponse): Promise<IResponse> {
        try {
           const birthInfo = new BirthInfo();
           const response = await birthInfo.getAllDetails(); 
           return res.status(200).json(response);
        } catch (error: any) {
            logger.error('>>> getBirthInfo error - ', error);
            return res.status(error.status).json(error);
        }
    }
}