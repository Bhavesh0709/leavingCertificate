import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addReligionAndCastes } from '../../adapters';
import { useToast } from '../atoms/CustomToast';
import { ReligionAndCastes } from './types';
import { validationRules } from './commonValidation';

function AddReligionAndCastes() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ReligionAndCastes>();
    const { displayToast } = useToast();
    const onSubmit: SubmitHandler<ReligionAndCastes> = async (data) => {
        const { religion, caste, subCaste } = data;
        addReligionAndCastes(religion, caste, subCaste)
            .then((response) => {
                const status = response.status;
                const data = status == 200 ? response.message : response.data;
                if (status == 200) {
                    displayToast('success', 'Successfully added the details', data);
                } else {
                    displayToast('danger', 'Error adding the details', data);
                }
            })
            .catch((e) => {
                displayToast('danger', 'Error while adding birth Info', e);
            });
    };
    const handleReset = () => {
        reset();
    };
    const renderInput = (
        fieldName: keyof ReligionAndCastes,
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
        const validationRule = validationRules[fieldName];
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}
                    {allowValidate ? <span className="text-danger">*</span> : ''}
                </label>
                <input
                    {...register(fieldName, validationRule)}
                    className="form-control"
                    type={inputType || 'text'}
                    defaultValue={defaultValue || ''}
                />
                {handleErrorMessage(fieldName)}
            </div>
        );
    };

    const handleErrorMessage = (fieldName: keyof ReligionAndCastes) => {
        const error = errors[fieldName];
        if (error) {
            return <p className="error-message text-danger">{error.message}</p>;
        }
        return null;
    };

    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12 my-3">
                            {renderInput('religion', 12, 'text', 'Hindu', false)}
                            {renderInput('caste', 12, 'text', 'Hindu', false)}
                            {renderInput('subCaste', 12, 'text', 'Hindu', false)}
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

export default AddReligionAndCastes;
