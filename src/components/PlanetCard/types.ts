import React from 'react'

export type PlanetCardProps = {
  celestialBodyName?: string
  link?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLElement>
}
