import React from 'react';
import { ExampleComponentProps } from '../components/example/example.component';
import SimpleFormComponent from '../components/simple-form/simple-form.component';
import { simpleFormCode } from '../components/simple-form/simple-form-code';
import ValidationsFormComponent from '../components/validations-form/validations-form.component';
import { validationsFormCode } from '../components/validations-form/validations-form-code';
import FileFormComponent from '../components/file-form/file-form.component';
import { fileFormCode } from '../components/file-form/file-form-code';
import DateFormComponent from '../components/date-form/date-form.component';
import { dateFormCode } from '../components/date-form/date-form-code';
import SelectCheckboxFormComponent from '../components/select-checkbox-form/select-checkbox-form.component';
import { selectCheckboxCode } from '../components/select-checkbox-form/select-checkbox-code';
import ListFormComponent from '../components/list-form/list-form.component';
import { listFormCode } from '../components/list-form/list-form-code';


interface AppConfig {
    EXAMPLES: ExampleComponentProps[];
}

export const APP_CONSTANTS: AppConfig = {
    EXAMPLES: [
        {
            title: 'SIMPLE FORM EXAMPLE',
            subtitle: 'An example of a form using all field types except list type, there is a section for this special type. It also shows how to listen for changes in specific fields.',
            component: <SimpleFormComponent/>,
            code: simpleFormCode
        }, {
            title: 'CUSTOM VALIDATIONS EXAMPLE',
            subtitle: 'An example of a form using custom validations for specific fields and for on submit including async calls.',
            component: <ValidationsFormComponent/>,
            code: validationsFormCode
        }, {
            title: 'FILE FORM EXAMPLE',
            subtitle: 'An example of a form with single and multiple files input and spefying the file type.',
            component: <FileFormComponent/>,
            code: fileFormCode
        }, {
            title: 'DATE FORM EXAMPLE',
            subtitle: 'An example of a form with dates in Spanish, with ranges and calendar adapted to mobile devices.',
            component: <DateFormComponent/>,
            code: dateFormCode
        }, {
            title: 'SELECT AND CHECKBOX FORM EXAMPLE',
            subtitle: 'An example of a form with single and multiple selection checkbox, checkbox-list and select showing how to pass already selected values.',
            component: <SelectCheckboxFormComponent/>,
            code: selectCheckboxCode
        }, {
            title: 'LIST FORM EXAMPLE',
            subtitle: 'An example of a form with a list field, it allows to add as many custom objects as you want. It is kind of a form inside a form. It is recursive, you can add a list field inside a list field.',
            component: <ListFormComponent/>,
            code: listFormCode
        }
    ]
};
