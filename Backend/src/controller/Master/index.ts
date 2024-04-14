import { logger } from '../../logger/logger';
import { BadRequestResponse } from '../../responseTypes/BadRequestResponse';
import { FormatResponse } from '../../responseTypes/FormatResponse';
import { SuccessResponse } from '../../responseTypes/SuccessResponse';
import MasterDB from '../../service/Master';
import { IRequest, IResponse } from '../../service/types';

export class MasterDBController {
    async getUserDetails(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const { aadharNo } = req.params;
            const masterDB = new MasterDB();
            const response = await masterDB.getUserDetails(aadharNo);
            return res.json(new SuccessResponse('Fetched successfully', response));
        } catch (error: any) {
            logger.error('>>> getUserDetails error - ', error);
            // const response = new FormatResponse();
            // const errors = response.formatErrorResponse(error);
            return res.status(error.status).json(error.data);
        }
    }

    async getAllUsers(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const masterDB = new MasterDB();
            const response = await masterDB.getAllUsers();
            return res.json(new SuccessResponse('Fetched successfully', response));
        } catch (error: any) {
            logger.error('>>> getUserDetails error - ', error);
            return res.status(error.status).json(error.data);
        }
    }

    async addUserDetails(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const { data } = req.body;
            const masterDB = new MasterDB();
            const formatResponse = new FormatResponse();
            const response = await masterDB.addUserDetails(data);
            const formattedData = formatResponse.format(response);
            return res.json(new SuccessResponse('Successfully added', formattedData));
        } catch (error: any) {
            logger.error('>>> addUserDetails error - ', error);
            const response = new FormatResponse();
            const errors = response.formatErrorResponse(error);
            return res.json(new BadRequestResponse('Bad data provided', errors.data));
        }
    }
}
