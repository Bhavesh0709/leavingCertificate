import { IResponseType } from "./types";

export class BadRequestResponse implements IResponseType {
    message: any;
    status: 400;
    name: 'BadRequest'
    constructor(msg: any) {
        this.name = 'BadRequest'
        this.message = msg;
        this.status = 400;
    }
}