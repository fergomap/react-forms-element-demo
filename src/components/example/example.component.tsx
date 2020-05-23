import React, { FunctionComponent, ReactElement, useState } from 'react';
import './example.component.scss';
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface ExampleComponentProps {
    title: string;
    subtitle: string;
    component: ReactElement;
    code: string;
}

const ExampleComponent: FunctionComponent<ExampleComponentProps> = ({ code, component, subtitle, title }): ReactElement => {
    const [ showCode, setShowCode ] = useState(false);

    return <div className="example-component">
        <div className="row">
            <div className="col-sm-12">
                <h4>{ title }</h4>
                <p>{ subtitle }</p>
            </div>
            <div className="col-sm-12 sections">
                <button className={!showCode ? 'selected' : ''} onClick={() => setShowCode(false)}>FORM</button>
                <button className={showCode ? 'selected' : ''} onClick={() => setShowCode(true)}>CODE</button>
            </div>
        </div>
        { showCode ? <Prism language="typescript" style={dark} showLineNumbers={true}>
            { code }
        </Prism> : component }
    </div>;
};

export default ExampleComponent;
