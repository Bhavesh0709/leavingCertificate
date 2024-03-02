import { get, post } from './providers';

const ENDPOINTS = {
    getBirthInfo: '/getBirthInfo',
    addBirthInfo: '/addBirthInfo',
    addCompliment: '/addCompliment',
    getCompliment: '/getCompliment',
    getDivisions: '/getDivisions',
    addDivision: '/addDivision'
};

const getBirthInfo = async (): Promise<any> => {
    const result = await get(ENDPOINTS.getBirthInfo);
    return result;
};

const addBirthInfo = async (
    birthPlace: string,
    taluka: string,
    country: string,
    state: string,
    district: string
): Promise<any> => {
    const result = await post(ENDPOINTS.addBirthInfo, {
        birthPlace: birthPlace,
        taluka: taluka,
        country: country,
        state: state,
        district: district
    });
    return result;
};

const addCompliment = async (compliment: string): Promise<any> => {
    const result = await post(ENDPOINTS.addCompliment, {
        compliment: compliment
    });
    return result;
};

const getCompliment = async () => {
    const result = await get(ENDPOINTS.getCompliment);
    return result;
};

const addDivision = async (division: string): Promise<any> => {
    const result = await post(ENDPOINTS.addDivision, { division });
    return result;
};
const getDivisions = async () => {
    const result = await get(ENDPOINTS.getDivisions);
    return result;
};

export { getBirthInfo, addBirthInfo, getCompliment, addCompliment, addDivision, getDivisions };
