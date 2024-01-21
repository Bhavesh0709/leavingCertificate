import { IResponseType } from './types';

export class ForbiddenResponse implements IResponseType {
    message: string;
    name = 'Forbidden';
    status = 403;
    constructor(message: string) {
        this.message = message;
    }
}
