import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'

import { actionTypes, stateTypes } from './types'

type PlanetsState = {
  planets: stateTypes.Planet[]
  isLoading: boolean
  details: stateTypes.Planet
  search: string
}

const initialState: PlanetsState = {
  planets: [],
  isLoading: false,
  details: {},
  search: '',
}

const slice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    getPlanetsFetch(state, action) {
      state.isLoading = true
    },
    getPlanetsSuccess(state, action: actionTypes.getPlanetsSuccess) {
      const { bodies } = action.payload
      state.planets = bodies
      state.isLoading = false
    },
    getPlanetsFailure(state) {
      state.isLoading = false
    },
    setSearch(state, action) {
      // Do nothing here
    },
    setSearchSuccess(state, action: actionTypes.setSearchSuccess) {
      state.search = action.payload
    },
    getPlanetDetails(state, action) {
      state.isLoading = true
    },
    getPlanetDetailsSuccess(state, action) {
      const { payload } = action
      state.isLoading = false
      state.details = payload
    },
    getPlanetDetailsFailure(state, action) {
      state.isLoading = false
    },
  },
})

export const { reducer, actions } = slice

const root = (state: RootState) => state[slice.name]
const planets = (state: RootState) => root(state).planets
const search = (state: RootState) => root(state).search
const details = (state: RootState) => root(state).details

export const selectors = {
  planets,
  search,
  details,
}
