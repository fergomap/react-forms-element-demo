import React from 'react';
import { ExampleComponentProps } from '../components/example/example.component';
import SimpleFormComponent from '../components/simple-form/simple-form.component';
import { simpleFormCode } from '../components/simple-form/simple-form-code';

interface AppConfig {
    EXAMPLES: ExampleComponentProps[];
}

export const APP_CONSTANTS: AppConfig = {
    EXAMPLES: [
        {
            title: 'SIMPLE FORM EXAMPLE',
            subtitle: 'An example of a form using all field types except list type, there is a section for this special type.',
            component: <SimpleFormComponent/>,
            code: simpleFormCode
        }
    ]
};
