import Compliment from "../../models/Compliment";


class ComplimentService {
    // async getAllDetails(): Promise<BirthDetails[]> {
    //     return await BirthDetails.findAll();
    // }
    async addCompliment(compliment: string): Promise<Compliment> {
        const doc = await Compliment.create({ statement: compliment});
        return doc;
    }

    async getAllCompliments(): Promise<Compliment[]> {
        const allCompliments = await Compliment.findAll();
        return allCompliments;
    }
}

export default ComplimentService;