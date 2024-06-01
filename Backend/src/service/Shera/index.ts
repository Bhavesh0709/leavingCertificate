import Shera from '../../models/Shera';

class SheraService {
    async addShera(sheraValue: string): Promise<Shera> {
        const doc = await Shera.create({ shera: sheraValue });
        return doc;
    }

    async getAllSheras(): Promise<Shera[]> {
        return await Shera.findAll();
    }

    async getSheraById(id: number): Promise<Shera | null> {
        const response = await Shera.findByPk(id);
        const dataValues = response?.dataValues;
        return dataValues.shera;
    }
}

export default SheraService;
