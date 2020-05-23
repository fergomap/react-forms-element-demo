export const simpleFormCode: string = `import React, { FunctionComponent, ReactElement } from "react";
import { FormComponent, Field } from "react-forms-element";

const SimpleFormComponent: FunctionComponent = (): ReactElement => {
  const fields: Field[] = [
    { value: "", className: "col-sm-12 col-md-3", label: "Name", name: "name", type: "string", required: true },
    { value: "", className: "col-sm-12 col-md-3", label: "Email", name: "email", type: "email", required: true },
    { value: "", className: "col-sm-12 col-md-3", label: "Age", name: "age", required: true, inputType: "number", type: "number" },
    { value: "", className: "col-sm-12 col-md-3", label: "Password", name: "pwd", required: true, inputType: "password" },
    { value: "", className: "col-sm-12 col-md-8", label: "Description", name: "description", type: "textarea" },
    { value: "", className: "col-sm-12 col-md-4", label: "Curriculum Vitae", name: "cv", type: "file", required: true },
    { value: "", className: "col-sm-12", label: "Business", name: "business", type: "checkbox", required: true },
    { value: "", className: "col-sm-12 col-md-4", label: "Birthday", name: "birthday", type: "date", required: true },
    { value: "", className: "col-sm-12 col-md-4", label: "Where do you live?", name: "continent", type: "select", options: [{label: "Africa", value: "af"}, {label: "America", value: "am"}, {label: "Asia", value: "as"}, {label: "Europe", value: "eu"}, {label: "Oceania", value: "oc"}] },
    { value: "", className: "col-sm-12 col-md-4", label: "Where would you like to live?", name: "desiredContinent", type: "select", placeholder: "Select the ones you like", options: [{label: "Africa", value: "af"}, {label: "America", value: "am"}, {label: "Asia", value: "as"}, {label: "Europe", value: "eu"}, {label: "Oceania", value: "oc"}], multipleSelected: true },
    { value: "", className: "col-sm-12 col-md-6", label: "Which is your favourite color?", name: "colors", type: "checkbox-list", options: [{label: "Red", value: "red"}, {label: "Green", value: "green"}, {label: "Blue", value: "blue"}, {label: "Yellow", value: "yellow"}] },
    { value: "", className: "col-sm-12 col-md-6", label: "What programming languages do you know?", name: "languages", type: "checkbox-list", options: [{label: "JavaScript", value: "js"}, {label: "TypeScript", value: "ts"}, {label: "JAVA", value: "java"}, {label: "Python", value: "py"}], multipleSelected: true },
  ];

  const onSubmit = (form: any): any => console.log(form);

  return <FormComponent className="row" fields={fields} onSubmit={onSubmit} />;
};

export default SimpleFormComponent;`;
