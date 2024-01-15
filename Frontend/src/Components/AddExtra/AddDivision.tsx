import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { validators } from './constant';
import { Division } from './types';

function AddDivision() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Division>();
    const onSubmit: SubmitHandler<Division> = (data) => console.log(data);
    const handleReset = () => {
        reset();
    }
    const renderInput = (
        fieldName: keyof Division,
        colW: number, 
        inputType?: string, 
        defaultValue?: string,
        allowValidation?: boolean
    ) => {
        const labelText = fieldName
            .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
            .replace(/^./, str => str.toUpperCase()); 
        const colStyling = `col-md-${colW} p-2`;
        const allowValidate = allowValidation !== false;
        return (
            <div className={colStyling}>
                <label htmlFor={fieldName} className="form-label">
                    {labelText}{allowValidate ? <span className='text-danger'>*</span> : ''}
                </label>
                <input
                    {...register(fieldName, 
                        handleInputRegistration(fieldName, allowValidate))}
                    className="form-control"
                    type={inputType || 'text'}
                    defaultValue={defaultValue || ''}
                />
                {handleErrorMessage(fieldName)}
            </div>
        );
    };

    const handleErrorMessage = (fieldName: keyof Division) => {
        const error = errors[fieldName];
        if (error) {
            return (
                <p className="error-message text-danger">{error.message}</p>
            );
        }
        return null;
    };

    const handleInputRegistration = (fieldName: keyof Division, allowValidation: boolean) => {
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
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12 d-flex my-3">
                            {renderInput('division',12)}
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button type="button" 
                                onClick={handleReset} 
                                className = "btn btn-danger btn-md px-5 my-4 mx-2">
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
    )
}

export default AddDivision