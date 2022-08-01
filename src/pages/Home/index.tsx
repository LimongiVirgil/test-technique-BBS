import React, { useEffect, useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomeTemplate from '../../templates/Home'
import { actions, selectors } from '../../redux'

const data: string[] = ['id', 'name', 'englishName', 'bodyType', 'discoveredBy', 'discoveryDate']

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectors.planets.search)
  const [searchInputValue, setSearchInputValue] = useState<string>(search)

  const HandleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setSearchInputValue(value)
      dispatch(actions.planets.setSearch(value))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(
      actions.planets.getPlanetsFetch({
        data: data.join(','),
        filter: `name,cs,${search}`,
      })
    )
  }, [dispatch, search])

  const planets = useSelector(selectors.planets.planets)

  return <HomeTemplate planets={planets} onChange={HandleInputChange} search={searchInputValue} />
}

export default DashboardPage
