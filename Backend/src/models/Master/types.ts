export type TMasterDBInput = TMasterDB & {
    dateOfAdmission: string;
    birthDate: string;
};
export type TMasterDBOutput = TMasterDB & {
    dateOfAdmission: Date;
    birthDate: Date;
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
    religion: string;
    caste: string;
    subCaste: string;
    previousSchoolName?: string;
    division: number;
    progressInStudy: number;
    behaviour: number;
    currentDivision: number;
    reasonOfLeaving?: string;
    shera?: string;
    classTeacher?: number;
};
