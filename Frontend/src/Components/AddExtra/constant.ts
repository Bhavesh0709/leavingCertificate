// const commonRegex = /^[a-zA-Z]+$/;
const commonRegex = /^[a-zA-Z\\u0900-\u097F]+$/;

// const commonRegex = /^[\u0900-\u097F]+$/; 
// Regex in marathi
export const validators = {
    division: /^[a-zA-Z0-9 ]+$/,
    birthPlace: commonRegex,
    taluka: commonRegex,
    district: commonRegex,
    state: commonRegex,
    country: commonRegex,
    compliment: commonRegex
};