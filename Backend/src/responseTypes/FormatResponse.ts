import { TSequelizeError } from './types';

export class FormatResponse {
    format(response) {
        const data: any[] = [];
        if (response.length > 0) {
            response.map((obj) => {
                const dataVal = obj.dataValues;
                data.push(dataVal);
            });
        } else {
            data.push(response.dataValues);
        }
        return data;
    }
    formatErrorResponse(error: TSequelizeError | any): { status: string; data: any } {
        let status;
        let data;
        if (error.status) {
            status = error.status;
            data = error;
        } else {
            const arr: Record<string, unknown>[] = [];
            const errors = error.errors;
            status = 400;
            errors.map((e) => {
                arr.push(e.message);
            });
            data = arr;
        }
        return { status: status, data: data };
    }
}
