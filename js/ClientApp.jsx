import React from 'react';
import { render } from 'react-dom';

/* Arrow functions have an implicit return so will get lint errors
if you are returning immediately but use return statement. */

const App = () => (
    <div className="app">
        <div className="landing">
            <h1> SVideo </h1>
            <input type="text" placeholder="Search" />
            <a> or Browse All </a>
        </div>
    </div>
);

render(<App />, document.getElementById('app'));
