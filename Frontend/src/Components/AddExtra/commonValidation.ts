import { BirthDetailsInputs, Compliment, Division, ReligionAndCastes, Shera } from './types';

type ValidationRules = {
    [key in keyof (BirthDetailsInputs & ReligionAndCastes & Compliment & Shera & Division)]?: {
        required?: string | { value: boolean; message: string };
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
    };
};

export const validationRules: ValidationRules = {
    shera: {
        required: 'Shera is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    division: {
        required: 'Division is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 10,
            message: 'Should not have more than 10 character'
        },
        pattern: {
            value: /^([a-zA-Z0-9]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    religion: {
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    caste: {
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    subCaste: {
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    compliment: {
        required: 'Compliment is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    country: {
        required: 'Country is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    state: {
        required: 'State is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    district: {
        required: 'District is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    birthPlace: {
        required: 'BirthPlace is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    },
    taluka: {
        required: 'Taluka is required',
        minLength: {
            value: 1,
            message: 'Should have more than 1 character'
        },
        maxLength: {
            value: 25,
            message: 'Should not have more than 25 character'
        },
        pattern: {
            value: /^([a-zA-Z]|[\u0900-\u097F])+$/u,
            message: `Should not contain special characters or spaces. 
            Only english or marathi chars allowed.`
        }
    }
};
