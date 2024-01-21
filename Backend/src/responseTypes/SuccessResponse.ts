import { IResponseType } from './types';

export class SuccessResponse implements IResponseType {
    message: string;
    name = 'SuccessResponse';
    status = 200;
    data: any;
    constructor(msg: string, data?: Record<string, unknown> | Array<any> | any) {
        this.name = 'SuccessResponse'
        this.message = msg;
        this.data = data || null;
        this.status = 200;
    }
}
