import { TSequelizeError } from './types';

export class FormatResponse {
    format(response) {
        return this.extractDataValues(response);
    }

    extractDataValues(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => this.extractDataValues(item));
        } else if (obj && typeof obj === 'object') {
            if (obj.dataValues) {
                return obj.dataValues;
            } else {
                const result = {};
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        result[key] = this.extractDataValues(obj[key]);
                    }
                }
                return result;
            }
        } else {
            return obj;
        }
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
