export const fileFormCode = `import React, { FunctionComponent, ReactElement } from 'react';
import { FormComponent, Field } from 'react-forms-element';

const FileFormComponent: FunctionComponent = (): ReactElement => {
  const fields: Field[] = [
    { value: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', className: 'col-sm-12 col-md-6', label: 'Single PDF File', name: 'pdf', type: 'file', fileType: 'application/pdf' },
    { value: [], className: 'col-sm-12 col-md-6', label: 'Multiple image files', name: 'images', type: 'file', fileType: 'image/*', multipleFiles: true, placeholder: 'Only images allowed', required: true }
  ];

  const onSubmit = (form: Record<string, any>): void => console.log(form);

  return <FormComponent className="row" fields={fields} onSubmit={onSubmit} />;
};

export default FileFormComponent;
`;
