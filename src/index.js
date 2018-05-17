import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import {ReactToasts} from './react-toasts';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(ReactToasts);

if (module.hot) {
    module.hot.accept('./react-toasts', () => {
        const main = require('./react-toasts').default;
        render(main)
    })
}
