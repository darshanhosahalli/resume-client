import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import configureStore from './configureStore';

const ReactApp = () => {
    const initialState = {};
    const store = configureStore(initialState, history);
    return <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </Provider>
}

ReactDOM.render(<ReactApp />, document.querySelector('#root'));