import BirthDetails from '../../models/BirthDetails';
import { TBirthDetails } from '../../models/BirthDetails/types';

class BirthInfo {
    async getAllDetails(): Promise<BirthDetails[]> {
        return await BirthDetails.findAll();
    }
    async addAllDetails(details: TBirthDetails): Promise<BirthDetails> {
        const modifiedObj = this.modifyObject(details);
        return await BirthDetails.create(modifiedObj);
    }
    async getBirthInfoById(uId: number): Promise<Record<string, unknown>> {
        const response = await BirthDetails.findByPk(uId);
        const dataValues = response?.dataValues;
        const { createdAt, updatedAt, id, ...restOfData } = dataValues;
        return restOfData;
    }
    modifyObject(details: TBirthDetails) {
        details.birthPlace = details.birthPlace.trim();
        details.country = details.country.trim();
        details.district = details.district.trim();
        details.state = details.state.trim();
        details.taluka = details.state.trim();

        return details;
    }
}

export default BirthInfo;
