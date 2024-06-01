import { FieldHeaders } from '../Components/Form/types';

export const parseResponse = async (promise: Promise<any>): Promise<any> => {
    return promise
        .then((data) => {
            return [null, data];
        })
        .catch((err) => [err]);
};

type ValidationRules = {
    [key in keyof typeof FieldHeaders]?: {
        required?: string | { value: boolean; message: string };
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
    };
};

// Example validation rules object should conform to the ValidationRules type
export const validationRules: ValidationRules = {
    aadharNo: {
        required: 'Aadhar Number is required',
        minLength: {
            value: 12,
            message: 'Aadhar Number should contain minimum 12 digits'
        },
        maxLength: {
            value: 12,
            message: 'Aadhar Number should not contain more than 12 digits'
        },
        pattern: {
            value: /^([0-9]{12}|[\u0966-\u096F]{12})$/,
            message: 'Aadhar Number should contain 12 valid digits'
        }
    },
    firstName: {
        required: 'First Name is required',
        maxLength: {
            value: 50,
            message: 'First Name should not contain more than 50 characters'
        },
        minLength: {
            value: 1,
            message: 'First Name should have more than 1 characters'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Name should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    middleName: {
        required: 'Middle Name is required',
        maxLength: {
            value: 50,
            message: 'Middle Name should not contain more than 50 characters'
        },
        minLength: {
            value: 1,
            message: 'Middle Name should have more than 1 characters'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Name should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    lastName: {
        required: 'Last Name is required',
        maxLength: {
            value: 50,
            message: 'Last Name should not contain more than 50 characters'
        },
        minLength: {
            value: 1,
            message: 'Last Name should have more than 1 characters'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Name should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    mothersName: {
        required: `Mother's Name is required`,
        maxLength: {
            value: 50,
            message: `Mother's Name should not contain more than 50 characters`
        },
        minLength: {
            value: 1,
            message: `Mother's Name should have more than 1 characters`
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Name should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    motherTongue: {
        required: 'Mother Tongue is required',
        maxLength: {
            value: 50,
            message: 'Mother Tongue should not contain more than 50 characters'
        },
        minLength: {
            value: 1,
            message: 'Mother Tongue should have more than 1 characters'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    reasonOfLeaving: {
        required: 'Reason of leaving is required',
        maxLength: {
            value: 50,
            message: 'Mother Tongue should not contain more than 50 characters'
        },
        minLength: {
            value: 1,
            message: 'Mother Tongue should have more than 1 characters'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    previousSchoolName: {
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    }

    // Add more fields with their specific validation rules
};
