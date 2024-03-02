import Master from '../../models/Master';
import { TMasterDBInput, TMasterDBOutput } from '../../models/Master/types';
import { BaseValidator } from './validator';

class MasterDB {
    private baseValidator: BaseValidator;
    constructor() {
        this.baseValidator = new BaseValidator();
    }
    async getUserDetails(aadharNo: number): Promise<Master | null> {
        return await Master.findByPk(aadharNo);
    }
    async addUserDetails(data: TMasterDBInput) {
        this.baseValidator.validateAddRecord(data);
        const modifiedObj = this.modifyUserObject(data);
        console.log('=== modified obj - ', modifiedObj);
        return await Master.create(modifiedObj);
    }
    modifyUserObject = (data: TMasterDBInput): TMasterDBOutput => {
        const obj: any = { ...data };
        obj.dateOfAdmission = new Date(obj.dateOfAdmission);
        obj.birthDate = new Date(obj.birthDate);
        const newData: TMasterDBOutput = obj;
        console.log('== new Data - ', newData);
        return newData;
    };
}

export default MasterDB;
