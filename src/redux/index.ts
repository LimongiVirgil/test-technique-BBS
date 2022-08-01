import * as apiRedux from './api/redux'
import * as appRedux from './app/redux'
import * as planetsRedux from './planets/redux'

export const actions = {
  app: appRedux.actions,
  api: apiRedux.actions,
  planets: planetsRedux.actions,
}

export const selectors = {
  app: appRedux.selectors,
  api: apiRedux.selectors,
  planets: planetsRedux.selectors,
}

export const reducers = {
  app: appRedux.reducer,
  api: apiRedux.reducer,
  planets: planetsRedux.reducer,
}
