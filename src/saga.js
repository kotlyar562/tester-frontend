import { all } from 'redux-saga/effects';
import { watchUserSaga } from './auth/ducks/sagas';

export default function* rootSaga() {
  yield all([watchUserSaga()]);
}
