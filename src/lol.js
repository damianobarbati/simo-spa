import React from 'react';
import { render } from 'react-dom';
import { CiaoIcon } from './icon.js';
import Button from './Button.js';

const App = () => (
    <h1>
        <span>Daie!</span>
        <CiaoIcon width={24} />

        <Button>se mi premi dico "ciao"</Button>
        <Button onClick={() => window.alert('hello')}>se mi premi dico "ciao", e poi dico pure "hello"</Button>
    </h1>
);

render(<App />, document.getElementById('ciaone'));

if (module && module.hot)
    module.hot.accept();
