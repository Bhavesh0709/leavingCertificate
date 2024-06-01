import Caste from '../../models/Caste';
import Religion from '../../models/Religion';
import SubCaste from '../../models/SubCaste';
import { IReligionAndCasteResp } from './types';

class ReligionAndCaste {
    async addReligionAndCaste(religion: string, caste: string, subCaste: string): Promise<Religion | Caste | SubCaste> {
        let result: Religion | Caste | SubCaste;
        if (religion.trim() !== '') {
            const religionData = await this.addReligion(religion);
            result = religionData;
        } else if (caste.trim() !== '') {
            const casteData = await this.addCaste(caste);
            result = casteData;
        } else {
            const subCasteData = await this.addSubCaste(subCaste);
            result = subCasteData;
        }
        return result;
    }
    async addReligion(religion: string): Promise<Religion> {
        const doc = await Religion.create({ religion: religion });
        return doc;
    }
    async addCaste(caste: string): Promise<Caste> {
        const doc = await Caste.create({ caste: caste });
        return doc;
    }
    async addSubCaste(subCaste: string): Promise<SubCaste> {
        const doc = await SubCaste.create({ subCaste: subCaste });
        return doc;
    }

    async getAllReligionAndCaste(): Promise<IReligionAndCasteResp> {
        const allReligions = await this.getAllReligions();
        const allCastes = await this.getAllCastes();
        const getAllSubCaste = await this.getAllSubCaste();
        return { religions: allReligions, caste: allCastes, subCaste: getAllSubCaste };
    }
    async getAllReligions(): Promise<Religion[]> {
        return await Religion.findAll();
    }
    async getAllCastes(): Promise<Caste[]> {
        return await Caste.findAll();
    }
    async getAllSubCaste(): Promise<SubCaste[]> {
        return await SubCaste.findAll();
    }

    async getReligionById(id: number): Promise<Religion | null> {
        const response = await Religion.findByPk(id);
        const dataValues = response?.dataValues;
        return dataValues.religion;
    }
    async getCasteById(id: number): Promise<Caste | null> {
        const response = await Caste.findByPk(id);
        const dataValues = response?.dataValues;
        return dataValues.caste;
    }
    async getSubCasteById(id: number): Promise<SubCaste | null> {
        const response = await SubCaste.findByPk(id);
        const dataValues = response?.dataValues;
        return dataValues.subCaste;
    }
}

export default ReligionAndCaste;
