import React, { FC } from 'react'

import Icon from '../Icon'
import { Icons } from '../Icon/types'

import { PlanetBodyTypeProps } from './types'

const PlanetBodyType: FC<PlanetBodyTypeProps> = ({ bodyType }) => {
  let bodyTypeSVG

  console.log(bodyType)

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

  return (
    <>
      <Icon
        icon={bodyTypeSVG}
        color="#000"
        style={{ width: '25px', margin: '0 8px', verticalAlign: 'middle' }}
      />
    </>
  )
}

export default PlanetBodyType
