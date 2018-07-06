import pocketListSaga from './pocketlist/PocketListSagas';
import {all} from "redux-saga/effects";


export default function *rootSaga() {
    console.log('rootSaga')

    yield all([
        pocketListSaga
    ]);
}
