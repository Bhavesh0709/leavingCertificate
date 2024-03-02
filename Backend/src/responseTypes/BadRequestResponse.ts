import { IResponseType } from './types';

export class BadRequestResponse implements IResponseType {
    message: any;
    status: 400;
    name: 'BadRequest';
    data?: unknown;
    constructor(msg: any, data?: unknown) {
        this.name = 'BadRequest';
        this.message = msg;
        this.status = 400;
        this.data = data;
    }
}
