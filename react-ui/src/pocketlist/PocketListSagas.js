import {takeLatest} from "redux-saga/effects";
import c from './constants';

function* fetchPocketListFromServer() {
    console.log('call fetch')
    fetch({
        url: 'localhost:3000/pocketlist/',
        type: 'GET'
    }).then( (response) => {
        console.log(response)
    }).catch( (err) => {
        console.log(err)
    })
}

export default function* watchFetchPocketList() {
    yield takeLatest(c.FETCH_POCKET_LIST, fetchPocketListFromServer);
}