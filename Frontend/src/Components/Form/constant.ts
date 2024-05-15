export const validators = {
    aadharNo: /^([0-9]{12}|[\u0966-\u096F]{12})$/,
    firstName: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    middleName: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    lastName: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    mothersName: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    nationality: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    motherTongue: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    religion: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    caste: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    subCaste: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    reasonOfLeaving: /^[a-zA-Z]|[\u0900-\u097F]+$/,
    shera: /^[a-zA-Z]|[\u0900-\u097F]+$/
};

export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const options = ['Ichalkaranji', 'Kolhapur', 'Belgavi'];
export const divisionOptions = ['10th A', '10th B', '10th C', '10th D', '10th E'];
export const complimentOptions = ['Good', 'Bad', 'Worst', 'Excellent'];
export const classTeacherOptions = ['John', 'Doe', 'Peter'];
