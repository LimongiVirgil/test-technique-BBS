import React from 'react'

export type MoonCardProps = {
  relatedMoons?: [{ moon: string; rel: string }]
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLElement>
}
