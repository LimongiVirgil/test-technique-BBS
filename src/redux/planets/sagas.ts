import { call, put, all, takeLatest, throttle } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { actions } from '..'

import { requestGetPlanets, requestGetPlanetDetails } from './requests/planets'

type Action = {
  type: string
  payload: any
}

export default class PlanetsSagas {
  static *getPlanets(action: Action) {
    try {
      const response: AxiosResponse = yield call(requestGetPlanets, action)
      const { data } = response
      yield put(actions.planets.getPlanetsSuccess(data))
    } catch (error) {
      // Here I could log the error into bugnsag for instance.
      yield put(actions.planets.getPlanetsFailure())
    }
  }

  static *getPlanetDetails(action: Action) {
    try {
      const response: AxiosResponse = yield call(requestGetPlanetDetails, action)
      const { data } = response
      yield put(actions.planets.getPlanetDetailsSuccess(data))
    } catch (error) {
      // Here I could log the error into bugnsag for instance.
      yield put(actions.planets.getPlanetsFailure())
    }
  }

  static *handleInputSearch(action: Action) {
    const search = action.payload
    yield put(actions.planets.setSearchSuccess(search))
  }

  static *loop() {
    yield all([
      takeLatest(actions.planets.getPlanetsFetch, PlanetsSagas.getPlanets),
      takeLatest(actions.planets.getPlanetDetails, PlanetsSagas.getPlanetDetails),
      throttle(500, actions.planets.setSearch, PlanetsSagas.handleInputSearch),
    ])
  }
}
