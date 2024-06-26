import { CommonInputs } from '../Components/Form/types';
import { get, post } from './providers';

const ENDPOINTS = {
    getBirthInfo: '/getBirthInfo',
    addBirthInfo: '/addBirthInfo',
    addCompliment: '/addCompliment',
    getCompliment: '/getCompliment',
    getDivisions: '/getDivisions',
    addDivision: '/addDivision',
    addUserDetails: '/addUserDetails',
    getUserDetails: (aadharNo: string) => `/getUserDetails/${aadharNo}`,
    generatePDF: (aadharNo: string) => `/generatePDF/${aadharNo}`,
    getAllUsers: '/getAllUsers',
    getAllReligionAndCastes: '/getAllReligionAndCastes',
    addReligionAndCastes: '/addReligionAndCastes',
    addShera: '/addShera',
    getSheras: '/getSheras'
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

const addUserDetails = async (data: CommonInputs): Promise<any> => {
    const result = await post(ENDPOINTS.addUserDetails, { data });
    return result;
};

const getUserDetails = async (aadharNo: string): Promise<any> => {
    const result = await get(ENDPOINTS.getUserDetails(aadharNo));
    return result;
};
const generatePDF = async (aadharNo: string): Promise<any> => {
    const result = await get(ENDPOINTS.generatePDF(aadharNo));
    return result;
};

const fetchAllUsers = async (): Promise<any> => {
    const result = await get(ENDPOINTS.getAllUsers);
    return result;
};

const getAllReligionAndCastes = async (): Promise<any> => {
    const result = await get(ENDPOINTS.getAllReligionAndCastes);
    return result;
};
const addReligionAndCastes = async (religion: string, caste: string, subCaste: string): Promise<any> => {
    const result = await post(ENDPOINTS.addReligionAndCastes, {
        religion,
        caste,
        subCaste
    });
    return result;
};

const addShera = async (shera: string): Promise<any> => {
    const result = await post(ENDPOINTS.addShera, {
        shera
    });
    return result;
};

const getSheras = async (): Promise<any> => {
    return await get(ENDPOINTS.getSheras);
};
export {
    getBirthInfo,
    addBirthInfo,
    getCompliment,
    addCompliment,
    addDivision,
    getDivisions,
    addUserDetails,
    getUserDetails,
    generatePDF,
    fetchAllUsers,
    getAllReligionAndCastes,
    addReligionAndCastes,
    addShera,
    getSheras
};
