export type Inputs = {
    aadharNo: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mothersName: string;
    motherTongue: string;
    reasonOfLeaving: string;
};

export type InputWithoutValidation = {
    studentId: string;
    birthPlace: string;
    birthDate: string;
    religion: string;
    caste: string;
    subCaste: string;
    dateOfAdmission: string;
    division: string;
    shera: string;
    progressInStudy: string;
    behaviour: string;
    dateOfLeaving: string;
    previousSchoolName: string;
    currentDivision: string;
    currentDivisionDate: string;
    schoolLeavingDate: string;
};

export type CommonInputs = Inputs & InputWithoutValidation;

export enum FieldHeaders {
    aadharNo = 'Aadhar No / (आधार क्रमांक)',
    firstName = 'First Name / (प्रथम नाव)',
    middleName = 'Middle Name / (मध्यवर्ती नाव)',
    lastName = 'Last Name / (आडनाव)',
    mothersName = "Mother's Name / (आईचे नाव)",
    motherTongue = 'Mother Tongue / (आईची मातृभाषा)',
    religion = 'Religion / (धर्म)',
    caste = 'Caste / (जात)',
    subCaste = 'Sub-Caste / (उपजात)',
    reasonOfLeaving = 'Reason of Leaving / (बाहेर पडण्याचा कारण)',
    shera = 'Shera / (शेरा)',
    studentId = 'Student Id / (स्टूडेंट Id)',
    birthPlace = 'Birth Place / (जन्म ठिकाण)',
    birthDate = 'Birth Date / (जन्म तारीख)',
    dateOfAdmission = 'Date of Admission / (प्रवेशची तारीख)',
    division = 'Standard / (इयत्ता)',
    progressInStudy = 'Progress in Study / (अभ्यासातील प्रगती)',
    behaviour = 'Behaviour / (वर्तन)',
    dateOfLeaving = 'Date of Leaving / (बाहेर पडण्याची तारीख)',
    previousSchoolName = 'Previous School Name and Standard / (या पूर्वीची शाळा व इयत्ता)',
    currentDivision = 'Current Standard / (इयत्ता)',
    currentDivisionDate = 'Current Standard Date / (सध्याच्या इयत्ता तारीख)',
    schoolLeavingDate = 'School Leaving Date / (शाळा सोडल्याचा दिनांक)'
}
