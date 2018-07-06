import { all } from 'redux-saga/effects';
import { watchLoadUser } from './auth/ducks/sagas';

export default function* rootSaga() {
  yield all([watchLoadUser()]);
}
