import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <h1>Daie!</h1>
);

render(<App />, document.body);

module.hot.accept();
