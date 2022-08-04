import React, { FC } from 'react'

import BodyCard from '../BodyCard'

import { PlanetCardProps } from './types'
import * as SC from './styled'

const PlanetCard: FC<PlanetCardProps> = ({ celestialBodyName, link, style }) => {
  let planetNameUpperCase = celestialBodyName

  if (celestialBodyName) {
    planetNameUpperCase = celestialBodyName.charAt(0).toUpperCase() + celestialBodyName.slice(1)
  }

  return (
    <SC.Div>
      <SC.SubTitle>Planète à proximité:</SC.SubTitle>
      <BodyCard celestialBodyName={planetNameUpperCase} link={link} style={style} />
    </SC.Div>
  )
}

export default PlanetCard
