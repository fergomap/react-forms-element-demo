import React, { FunctionComponent, ReactElement } from 'react';
import './App.scss';
import HeaderComponent from './components/header/header.component';
import ExampleComponent, { ExampleComponentProps } from './components/example/example.component';
import { APP_CONSTANTS } from './config/app.config';

const App: FunctionComponent = (): ReactElement => {
  return <div className="App">
      <HeaderComponent/>
      <div className="title-container text-centered">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
          <h1>React Forms Element</h1>
          <p>Flexible and customizable npm component to easily create forms in React.</p>
      </div>
      <div className="margin-top">
        { APP_CONSTANTS.EXAMPLES.map((props: ExampleComponentProps, index: number) => <ExampleComponent key={index} {...props}/>) }
      </div>
  </div>;
};

export default App;
