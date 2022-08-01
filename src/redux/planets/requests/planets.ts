import axios from 'axios'

type requestAction = {
  type: string
  payload: any
}

export function requestGetPlanets(action: requestAction) {
  const { payload: params } = action
  return axios.request({
    method: 'GET',
    url: 'https://api.le-systeme-solaire.net/rest.php/bodies',
    params: params,
  })
}

export function requestGetPlanetDetails(action: requestAction) {
  const { id, params } = action.payload
  return axios.request({
    method: 'GET',
    url: `https://api.le-systeme-solaire.net/rest.php/bodies/${id}`,
    params,
  })
}
