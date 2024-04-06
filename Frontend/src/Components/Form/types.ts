export type Inputs = {
    aadharNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mothersName: string;
    motherTongue: string;
    religion: string;
    caste: string;
    subCaste: string;
    reasonOfLeaving: string;
    shera: string;
};

export type InputWithoutValidation = {
    studentId: string;
    birthPlace: string;
    birthDate: string;
    dateOfAdmission: string;
    division: string;
    progressInStudy: string;
    behaviour: string;
    dateOfLeaving: string;
    previousSchoolName: string;
    currentDivision: string;
    currentDivisionDate: string;
    classTeacher: string;
};

export type CommonInputs = Inputs & InputWithoutValidation;
