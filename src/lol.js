import React from 'react';
import { render } from 'react-dom';
import { CiaoIcon } from './icon.js';

const App = () => (
    <h1>
        <span>Daie!</span>
        <CiaoIcon width={24} />
    </h1>
);

render(<App />, document.getElementById('ciaone'));

if (module && module.hot)
    module.hot.accept();
