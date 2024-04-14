import Master from '../../models/Master';
import { TMasterDBInput } from '../../models/Master/types';
import { ModifyObject } from './utils';

class MasterDB {
    private modifyObject: ModifyObject;
    constructor() {
        this.modifyObject = new ModifyObject();
    }
    async getUserDetails(aadharNo: string): Promise<Record<string, unknown> | null> {
        const response = await Master.findByPk(aadharNo);
        const dataValues = response?.dataValues;
        return dataValues;
    }
    async getModifiedUserDetails(aadharNo: string): Promise<Record<string, unknown> | null> {
        const response = await Master.findByPk(aadharNo);
        const dataValues = response?.dataValues;
        const modifiedObj = this.modifyObject.modifyGetUserObject(dataValues);
        return modifiedObj;
    }
    async addUserDetails(data: TMasterDBInput) {
        const existingUser = await Master.findOne({
            where: {
                aadharNo: data.aadharNo
            }
        });
        const modifiedObj = this.modifyObject.modifyAddUserObject(data);
        if (existingUser) {
            return await existingUser.update(modifiedObj);
        } else {
            return await Master.create(modifiedObj);
        }
    }
    async getAllUsers(): Promise<{
        rows: Master[];
        count: number;
    }> {
        const result = Master.findAndCountAll({
            attributes: ['aadharNo', 'studentId', 'firstName', 'lastName']
        });
        return result;
    }
}

export default MasterDB;
