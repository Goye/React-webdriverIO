import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

const render = ((rootElement) => {

    return (appRoot) => {
        ReactDOM.render(appRoot, rootElement);
    };

})(document.querySelector('main'));


if (module.hot) {
    const AppContainer = require('react-hot-loader').AppContainer;

    render(
        <AppContainer>
            <App/>
        </AppContainer>
    );

    module.hot.accept('./app', () => {
        render(
            <AppContainer>
                <App/>
            </AppContainer>
        );
    });
} else {
    render(
        <App/>
    );
}
