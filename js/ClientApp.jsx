import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
/* Arrow functions have an implicit return so will get lint errors
if you are returning immediately but use return statement. */

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    // will render whatever is in Landing inside app if route matches
    <BrowserRouter>
        <div className="app">
            {/* switch says render 1 component - never two */}
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                {/* if no route is found - default to this */}
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));
