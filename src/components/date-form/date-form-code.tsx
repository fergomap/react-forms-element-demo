export const dateFormCode = `import React, { FunctionComponent, ReactElement } from 'react';
import { FormComponent, Field } from 'react-forms-element';
import es from 'date-fns/locale/es';

const DateFormComponent: FunctionComponent = (): ReactElement => {
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(minDate.getMonth() + 1);

    const fields: Field[] = [
        { type: 'custom', content: <div className="col-sm-12"><h4>Custom content as title for the form</h4></div> },
        { value: '', className: 'col-sm-12 col-md-4', label: 'Date with max and min', name: 'maxMinDate', type: 'date', minDate, maxDate },
        { value: '', className: 'col-sm-12 col-md-4', label: 'Date adapted to mobile', name: 'mobileDate', type: 'date', mobileCalendar: true },
    ];

    const onSubmit = (form: Record<string, any>): void => console.log(form);

    return <FormComponent className="row" fields={fields} onSubmit={onSubmit} calendarLocale={es} />;
};

export default DateFormComponent;
`;