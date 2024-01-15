export type Inputs = {
  email: string;
  aadharNo: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mothersName: string;
  nationality: string;
  motherTongue: string;
  religion: string;
  caste: string;
  subCaste: string;
  reasonOfLeaving: string;
  shera: string;
};

export type InputWithoutValidation = {
  birthPlace: string;
  birthDate: Date;
  dateOfAdmission: Date;
  division: string;
  progressInStudy: string;
  behaviour: string;
  dateOfLeaving: Date;
  previousSchoolName: string;
  currentDivision: string;
  currentDivisionDate: Date;
  classTeacher: string;
}

export type CommonInputs = Inputs & InputWithoutValidation;

