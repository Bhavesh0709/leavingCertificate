import { TMasterDBInput } from '../../models/Master/types';
import { RegexPattern } from '../../utils/common';

export class BaseValidator {
    validateAddRecord = (data: TMasterDBInput) => {
        return this.validateRegexCheck(data);
    };
    private validateRegexCheck = (data: TMasterDBInput) => {
        for (const key in data) {
            const value = data[key];
            let type;
            if (typeof key === 'number') {
                type = 'number';
            } else if (typeof key === 'string') {
                type = 'string';
            } else {
                type = 'Date';
                continue;
            }
            if (!this.validateProperty(value.toString(), type, key)) {
                throw new Error(`Bad Request: Invalid value '${value}' for property '${key}'`);
            }
        }
        return true;
    };
    private validateNumberCheck = (value: string, key: string) => {
        if (key === 'aadharNo') {
            console.log('=== IN AADHAR NO CHECK');
            return /^\d{12}$/.test(value);
        }
        return RegexPattern.number.test(value);
    };
    private validateStringCheck = (value: string) => {
        return RegexPattern.string.test(value);
    };
    private validateProperty = (value: string, type: string, key: string) => {
        return type === 'number' ? this.validateNumberCheck(value, key) : this.validateStringCheck(value);
    };
}
