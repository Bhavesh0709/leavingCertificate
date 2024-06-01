export type TMasterDBInput = TMasterDB & {
    dateOfAdmission: string;
    birthDate: string;
    schoolLeavingDate: string;
};
export type TMasterDBOutput = TMasterDB & {
    dateOfAdmission: Date;
    birthDate: Date;
    schoolLeavingDate: Date;
};
export type TMasterDB = {
    aadharNo: number;
    studentId?: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mothersName: string;
    motherTongue: string;
    birthPlace: number;
    religion: number;
    caste: number;
    subCaste: number;
    previousSchoolName?: string;
    division: number;
    progressInStudy: number;
    behaviour: number;
    currentDivision: number;
    reasonOfLeaving?: string;
    shera?: number;
};
