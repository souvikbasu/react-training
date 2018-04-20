import {createStore} from 'redux';
import speakers from '../reducers/speakerReducer';

export default function configureStore(initialState) {
    return createStore(speakers, initialState);
}
