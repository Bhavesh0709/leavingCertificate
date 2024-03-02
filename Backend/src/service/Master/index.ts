import Master from '../../models/Master';
import { TMasterDBInput } from '../../models/Master/types';
import { ModifyObject } from './utils';

class MasterDB {
    private modifyObject: ModifyObject;
    constructor() {
        this.modifyObject = new ModifyObject();
    }
    async getUserDetails(aadharNo: string): Promise<Record<string, unknown>> {
        const response = await Master.findByPk(aadharNo);
        const dataValues = response?.dataValues;
        const modifiedObj = await this.modifyObject.modifyGetUserObject(dataValues);
        return modifiedObj;
    }
    async addUserDetails(data: TMasterDBInput) {
        const modifiedObj = this.modifyObject.modifyAddUserObject(data);
        return await Master.create(modifiedObj);
    }
}

export default MasterDB;
