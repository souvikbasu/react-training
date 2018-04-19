import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import speakerList from './models/speakerList';
import Conference from "./components/Conference.jsx";
import configureStore from './store/configureStore';

speakerList.selectedSpeaker = speakerList.speakers[0];
const store = configureStore(speakerList);

ReactDOM.render(
    <Provider store={store}>
        <Conference />
    </Provider>,
    document.getElementById('root')
);
