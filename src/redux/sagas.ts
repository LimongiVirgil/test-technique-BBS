import { all, fork } from 'redux-saga/effects'

import ApiSagas from './api/sagas'
import AppSagas from './app/sagas'
import PlanetsSagas from './planets/sagas'

function* loop() {
  yield all([ApiSagas.loop(), AppSagas.loop(), PlanetsSagas.loop()])
}

export default function* rootSaga() {
  yield fork(loop)
}
