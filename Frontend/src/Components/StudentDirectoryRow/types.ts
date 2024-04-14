export interface IStudentData {
    aadharNo: string;
    studentId: number;
    firstName: string;
    lastName: string;
}

export interface IStudentDirectoryRow {
    studentData: IStudentData;
}

export enum TableHeaders {
    STUDENT_ID = 'Student Id',
    NAME = 'Name',
    AADHAR_NO = 'Aadhar No',
    ACTIONS = 'Actions'
}

export enum ActionItems {
    VIEW = 'View',
    EDIT = 'Edit',
    PRINT = 'Print'
}
