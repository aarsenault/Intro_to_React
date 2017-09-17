import React from 'react';
import { render } from 'react-dom';

const MyTitle = function MyTitle(props) {
    // return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));

    const style = { color: props.color };
    return (
        <div>
            <h1 style={style}>{props.title}</h1>
        </div>
    );
};

const MyFirstComponent = function MyFirstComponent() {
    return (
        <div id="my-first-component">
            <MyTitle title="game of thrones" color="Peru" />
            <MyTitle title="whatever" color="Black" />
            <MyTitle title="test" color="Cornsilk" />
            <MyTitle title="test2" color="YellowGreen" />
        </div>
    );
};

render(<MyFirstComponent />, document.getElementById('app'));
