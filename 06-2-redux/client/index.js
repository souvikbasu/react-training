import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import data from './models/data';
import Conference from "./components/Conference.jsx";
import configureStore from './store/configureStore';

data.selectedSpeaker = data.speakers[0];
const store = configureStore(data);

ReactDOM.render(
    <Provider store={store}>
        <Conference />
    </Provider>,
    document.getElementById('root')
);
