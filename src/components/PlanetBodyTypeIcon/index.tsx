import React, { FC } from 'react'

import Icon from '../Icon'
import { Icons } from '../Icon/types'

import { PlanetBodyTypeIconProps } from './types'

const PlanetBodyTypeIcon: FC<PlanetBodyTypeIconProps> = ({ bodyType, style }) => {
  let bodyTypeSVG

  switch (bodyType) {
    case 'Moon':
      bodyTypeSVG = Icons.moon
      break
    case 'Asteroid':
      bodyTypeSVG = Icons.asteroid
      break
    case 'Comet':
      bodyTypeSVG = Icons.comet
      break
    default:
      bodyTypeSVG = Icons.planet
  }

  return <Icon icon={bodyTypeSVG} color="#000" style={style} />
}

export default PlanetBodyTypeIcon
