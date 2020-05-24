import React, { FunctionComponent, ReactElement } from 'react';
import { FormComponent, Field } from 'react-forms-element';

const submitList = (values: any): Record<string, string> | void => {
    return values.city.length > 3 ? undefined : { city: 'The city does not exist!' };
};

const formatDate = (date: Date): string => date.toDateString();

const ListFormComponent: FunctionComponent = (): ReactElement => {
  const fields: Field[] = [
    { value: '', label: 'Name', name: 'name', type: 'string' }, 
    { value: '', title: 'Which cities have you visited?', name: 'cities', type: 'list', required: true, onSubmit: submitList, fields: [ 
        { value: '', label: 'City', name: 'city', type: 'string', required: true, showInList: true },
        { value: '', label: 'Country', name: 'country', type: 'string', required: true },
        { value: '', label: 'Did you like it?', listLabel: 'Liked', name: 'liked', type: 'checkbox', showInList: true },
        { value: '', label: 'When did you visit it?', listLabel: 'When', name: 'when', type: 'date', required: true, maxDate: new Date(), showInList: true },
        { value: '', label: 'When do you plan to visit it again? (other date format)', listLabel: 'Next visit', name: 'nextVisit', type: 'date', formatDate, minDate: new Date(), showInList: true },
        { value: '', label: 'Photos', name: 'photos', type: 'file', multipleFiles: true, showInList: true },
        { value: '', label: 'Score', showInList: true, required: true, placeholder: '- Select -', name: 'score', type: 'select', options: [{label: 'Bad', value: 'bad'}, {label: 'Good', value: 'good'}, {label: 'Excellent', value: 'excellent'}] },
        { value: '', label: 'Which kind of food did you eat?', listLabel: 'Food', multipleSelected: true, required: false, name: 'foods', showInList: true, type: 'checkbox-list', options: [{label: 'Pizza', value: 'pizza'}, {label: 'Hamburguer', value: 'hamburguer'}, {label: 'Sushi', value: 'sushi'}] },
    ]}
  ];

  const onSubmit = (form: any): any => console.log(form);

  return <FormComponent fields={fields} onSubmit={onSubmit} />;
};

export default ListFormComponent;
