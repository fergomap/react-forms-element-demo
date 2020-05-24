import React, { FunctionComponent, ReactElement, useState } from 'react';
import { FormComponent, Field } from 'react-forms-element';
import { SpinnerComponent } from 'react-element-spinner';

const nameValidation = (name: string): string => name.length > 3 ? '' : 'short_name';

const customErrors = {
    short_name: 'Name is too short.',
    server_error: 'Something went wrong, please try later.'
}

const ValidationsFormComponent: FunctionComponent = (): ReactElement => {
    const [ loading, setLoading ] = useState(false);

    const asyncValidation = (email: string): Promise<string> => {
        setLoading(true);

        return new Promise(resolve => {
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                resolve(email === 'email@gmail.com' ? 'This mail is already registered' : '');
                setLoading(false);
            }, 2000);
        });
    };

    const fields: Field[] = [
        { value: '', className: 'col-sm-12 col-md-3', label: 'Name', name: 'name', type: 'string', placeholder: 'Name', customValidator: nameValidation },
        { value: 'default@gmail.com', className: 'col-sm-12 col-md-3', label: 'Email', name: 'email', type: 'email', customValidator: asyncValidation }
    ];

    const onSubmit = (form: Record<string, any>): Record<string, any> | void => {
        return form.name === 'John' ? { generalError: 'server_error' } : console.log(form);
    };

    return <>
        <SpinnerComponent position="global" loading={loading} />
        <FormComponent className="row" fields={fields} onSubmit={onSubmit} errors={customErrors} submitButtonText="Submit" />
    </>;
};

export default ValidationsFormComponent;
