import {createStore} from 'redux';
import speakers from '../reducers/speakerReducer';

export default function configureStore(initialState) {
    return createStore(speakers, initialState);
}

// export default function configureStore(initialState) {
//     return createStore(speakers, initialState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// }
