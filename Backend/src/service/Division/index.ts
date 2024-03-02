import Division from '../../models/Division';
import { BadRequestResponse } from '../../responseTypes/BadRequestResponse';

class DivisionService {
    async addDivision(division: string): Promise<Division> {
        await this.validateDivison(division);
        const doc = await Division.create({ division: division });
        return doc;
    }

    async getAllDivisions(): Promise<Division[]> {
        const allDivisions = await Division.findAll();
        return allDivisions;
    }

    async getDivisionById(id: number): Promise<Division | null> {
        const response = await Division.findByPk(id);
        const dataValues = response?.dataValues;
        return dataValues.division;
    }

    private async validateDivison(division: string): Promise<void> {
        if (!division || division.trim() === '') {
            throw new BadRequestResponse('Division name cannot be empty');
        }

        const existingDivision = await Division.findOne({ where: { division: division } });
        if (existingDivision) {
            throw new BadRequestResponse('Division already Exists');
        }
    }
}

export default DivisionService;
