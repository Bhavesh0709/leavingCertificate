export const validators = {
    aadharNo: /^[1-9]\d{11}$/,
    firstName: /^[a-zA-Z]+$/,
    middleName: /^[a-zA-Z]+$/,
    lastName: /^[a-zA-Z]+$/,
    mothersName: /^[a-zA-Z]+$/,
    nationality: /^[a-zA-Z]+$/,
    motherTongue: /^[a-zA-Z]+$/,
    religion: /^[a-zA-Z]+$/,
    caste: /^[a-zA-Z]+$/,
    subCaste: /^[a-zA-Z]+$/,
    reasonOfLeaving: /^[a-zA-Z]+$/,
    shera: /^[a-zA-Z]+$/
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
