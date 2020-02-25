import authReducer from './authReducer';
import houselistReducer from './houselistReducer'
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    lists : houselistReducer, 
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default rootReducer;
