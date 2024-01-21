import BirthDetails from "../../models/BirthDetails";

class BirthInfo {
    async getAllDetails(): Promise<BirthDetails[]> {
        return await BirthDetails.findAll();
    }
    async addAllDetails() {
        
    }
}

export default BirthInfo;