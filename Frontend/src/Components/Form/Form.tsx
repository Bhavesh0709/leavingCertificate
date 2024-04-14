import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addUserDetails, getBirthInfo, getCompliment, getDivisions, getUserDetails } from '../../adapters';
import { parseResponse } from '../../utils/common';
import { getCurrentDate, validators } from './constant';
import { CommonInputs, Inputs, InputWithoutValidation } from './types';
import { useToast } from '../atoms/CustomToast';
import { useParams } from 'react-router-dom';

function Form() {
    const id = useParams();

    const { displayToast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<CommonInputs>();
    let mode = 'ADD';
    if (Object.keys(id).length > 0) {
        mode = 'EDIT';
    }
    if (mode === 'EDIT') {
        useEffect(() => {
            if (mode === 'EDIT') {
                const fetchStudentData = async () => {
                    const aadharNo = id.id as string;
                    const [studentDataError, studentDataResult] = await parseResponse(getUserDetails(aadharNo));
                    if (studentDataError || studentDataResult.status !== 200) {
                        console.error('Error while fetching student data', studentDataError);
                    } else {
                        const data = studentDataResult.data;
                        setStudentData(data);
                        // Set form values using setValue
                        Object.keys(data).forEach((key) => {
                            setValue(key as keyof CommonInputs, data[key]);
                        });
                    }
                };
                fetchStudentData();
            }
        }, [id, mode, setValue]);
    }

    const [studentData, setStudentData] = useState<CommonInputs | null>(null);
    const [options, setOptions] = useState({
        birthPlace: [],
        division: [],
        compliments: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data for birthPlace
                const [birthPlaceError, birthPlaceResult] = await parseResponse(getBirthInfo());
                if (birthPlaceError || birthPlaceResult.status !== 200) {
                    console.error('Error while fetching birthPlaceInfo', birthPlaceError);
                } else {
                    setOptions((prevOptions) => ({
                        ...prevOptions,
                        birthPlace: birthPlaceResult.data
                    }));
                }

                // Fetch data for division
                const [divisionError, divisionResult] = await parseResponse(getDivisions());
                if (divisionError || divisionResult.status !== 200) {
                    console.error('Error while fetching divisionInfo', divisionError);
                } else {
                    setOptions((prevOptions) => ({
                        ...prevOptions,
                        division: divisionResult.data
                    }));
                }

                // Fetch data for compliments
                const [complimentsError, complimentsResult] = await parseResponse(getCompliment());
                if (complimentsError || complimentsResult.status !== 200) {
                    console.error('Error while fetching complimentsInfo', complimentsError);
                } else {
                    setOptions((prevOptions) => ({
                        ...prevOptions,
                        compliments: complimentsResult.data
                    }));
                }
            } catch (error) {
                console.error('Error while fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const onSubmit: SubmitHandler<CommonInputs> = (data) => {
        addUserDetails(data)
            .then((response) => {
                const status = response.status;
                const data = status == 200 ? response.message : response.data;
                if (status == 200) {
                    displayToast('success', 'Successfully added the user record', 'temp');
                } else {
                    displayToast('danger', 'Error adding the user record', data);
                }
            })
            .catch((e) => {
                displayToast('danger', 'Error while adding the user record', e);
            });
    };
    const handleReset = () => {
        reset();
    };
    const handleErrorMessage = (fieldName: keyof CommonInputs) => {
        const error = errors[fieldName];
        if (error) {
            return <p className="error-message text-danger">{error.message}</p>;
        }
        return null;
    };

    const handleInputRegistration = (fieldName: keyof Inputs, allowValidation: boolean) => {
        if (allowValidation) {
            return {
                required: `${fieldName} is required`,
                pattern: {
                    value: validators[fieldName],
                    message: `Please enter a valid ${fieldName}`
                }
            };
        }
        return {};
    };

    const renderInput = (
        fieldName: keyof Inputs,
        colW: number,
        inputType?: string,
        defaultValue?: string,
        allowValidation?: boolean
    ) => {
        const labelText = fieldName
            .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
            .replace(/^./, (str) => str.toUpperCase());
        const colStyling = `col-md-${colW} p-2`;
        const allowValidate = allowValidation !== false;
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}
                    {allowValidate ? <span className="text-danger">*</span> : ''}
                </label>
                <input
                    {...register(fieldName, handleInputRegistration(fieldName, allowValidate))}
                    className="form-control"
                    type={inputType || 'text'}
                    defaultValue={defaultValue || ''}
                />
                {handleErrorMessage(fieldName)}
            </div>
        );
    };
    const renderInputWithoutValidation = (
        fieldName: keyof InputWithoutValidation,
        colW: number,
        inputType?: string,
        defaultValue?: string
    ) => {
        const labelText = fieldName
            .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
            .replace(/^./, (str) => str.toUpperCase());
        const colStyling = `col-md-${colW} p-2`;
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}
                </label>
                <input
                    {...register(fieldName)}
                    className="form-control"
                    type={inputType || 'text'}
                    defaultValue={defaultValue || ''}
                />
            </div>
        );
    };

    const renderDatePicker = (fieldName: keyof InputWithoutValidation, colW: number) => {
        const labelText = fieldName
            .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
            .replace(/^./, (str) => str.toUpperCase());
        const colStyling = `col-md-${colW} p-2`;
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}
                    {<span className="text-danger">*</span>}
                </label>
                <input
                    {...register(fieldName, { required: `${fieldName} is required` })}
                    className="form-control"
                    type="date"
                    max={getCurrentDate()}
                />
                {handleErrorMessage(fieldName)}
            </div>
        );
    };
    const renderDropdown = (
        fieldName: keyof InputWithoutValidation,
        colW: number,
        options: any[],
        labelDisplayValue: string,
        labelSelectedValue: string
    ) => {
        const labelText = fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
        const colStyling = `col-md-${colW} p-2`;
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}
                    {<span className="text-danger">*</span>}
                </label>
                <select {...register(fieldName, { required: `${fieldName} is required` })} className="form-select">
                    {options.map((option, index) => (
                        <option key={index} value={option[labelSelectedValue]}>
                            {option[labelDisplayValue]}
                        </option>
                    ))}
                </select>
                {handleErrorMessage(fieldName)}
            </div>
        );
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12 d-flex my-3">
                            {renderInputWithoutValidation('studentId', 6)}
                            {renderInput('aadharNo', 6, 'number')}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderInput('firstName', 4)}
                            {renderInput('middleName', 4)}
                            {renderInput('lastName', 4)}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderInput('mothersName', 4)}
                            {renderInput('motherTongue', 4)}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderInput('religion', 4)}
                            {renderInput('caste', 4)}
                            {renderInput('subCaste', 4)}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderDatePicker('birthDate', 6)}
                            {renderDropdown('birthPlace', 6, options.birthPlace, 'birthPlace', 'id')}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderInputWithoutValidation('previousSchoolName', 12)}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderDatePicker('dateOfAdmission', 6)}
                            {renderDropdown('division', 6, options.division, 'division', 'id')}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderDropdown('progressInStudy', 6, options.compliments, 'statement', 'id')}
                            {renderDropdown('behaviour', 6, options.compliments, 'statement', 'id')}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderDropdown('currentDivision', 6, options.division, 'division', 'id')}
                            {renderDatePicker('currentDivisionDate', 6)}
                        </div>

                        <div className="col-md-12 d-flex ">
                            {renderInput('reasonOfLeaving', 4)}
                            {renderInput('shera', 4)}
                            {renderDropdown('classTeacher', 4, options.compliments, 'statement', 'id')}
                        </div>

                        <div className="d-flex justify-content-end">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="btn btn-danger btn-md px-5 my-4 mx-2"
                            >
                                Reset
                            </button>
                            <button type="submit" className="btn btn-success btn-md px-5 my-4 mx-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
