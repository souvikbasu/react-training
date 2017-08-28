import { combineReducers } from 'redux';
import speakers from './speakerReducers';

export default combineReducers({
    speakers: speakers
});
