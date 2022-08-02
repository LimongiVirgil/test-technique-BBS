import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import Icon from '../../components/Icon'
import { Icons } from '../../components/Icon/types'
import PlanetBodyType from '../../components/PlanetBodyType'

type Details = {
  id?: string
  name?: string
  discoveryDate?: string
  avgTemp?: string
  dimension?: string
  density?: string
  gravity?: string
  inclination?: string
  escape?: string
  bodyType?: string
}

export type PlanetTemplateProps = {
  details: Details
  onNavigateBack: React.MouseEventHandler<HTMLButtonElement>
}

import * as SC from './styled'

const PlanetTemplate: FC<PlanetTemplateProps> = ({ details, onNavigateBack }) => {
  const { t: translate } = useTranslation()

  const displayValue = (key: any, value: string | undefined) => {
    return value ? `${translate(key)} : ${value}` : `${translate(key)} : N/A`
  }

  return (
    <>
      <Helmet>
        <title>{`${details.name} - Système solaire`} </title>
      </Helmet>
      <Container>
        <Icon
          icon={Icons.longArrowLeft}
          color="#000"
          style={{ width: '25px', margin: '20px 0' }}
          onClick={onNavigateBack}
        />
        <SC.Title>{details.name}</SC.Title>
        <SC.Text>
          {displayValue('bodyType', details.bodyType)}
          <PlanetBodyType bodyType={details.bodyType} />
        </SC.Text>
        <SC.Text>{displayValue('density', details.density)}</SC.Text>
        <SC.Text>{displayValue('gravity', details.gravity)}</SC.Text>
        <SC.Text>{displayValue('avgTemp', details.avgTemp)}</SC.Text>
        <SC.Text>{displayValue('discoveryDate', details.discoveryDate)}</SC.Text>
        <SC.Text>{displayValue('dimension', details.dimension)}</SC.Text>
        <SC.Text>{displayValue('inclination', details.inclination)}</SC.Text>
        <SC.Text>{displayValue('escape', details.escape)}</SC.Text>
      </Container>
    </>
  )
}

export default PlanetTemplate
