import React, { useEffect } from 'react'
import { RouteComponentProps, useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PlanetTemplate from '../../templates/Planet'
import { actions, selectors } from '../../redux'

type requestParams = {
  id: string
}

const PlanetPage: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams<requestParams>()

  const HandleOnNavigateBack = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch(
      actions.planets.getPlanetDetails({
        id: params.id,
        params: {
          data: 'id,name,discoveryDate,avgTemp,dimension,density,gravity,moons,inclination,escape',
        },
      })
    )
  }, [dispatch, params.id])

  const details = useSelector(selectors.planets.details)

  return <PlanetTemplate details={details} onNavigateBack={HandleOnNavigateBack} />
}

export default PlanetPage
