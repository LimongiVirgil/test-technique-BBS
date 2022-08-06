import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import Icon from '../../components/Icon'
import { Icons } from '../../components/Icon/types'
import PlanetBodyTypeIcon from '../../components/PlanetBodyTypeIcon'
import PlanetCard from '../../components/PlanetCard'
import MoonCard from '../../components/MoonCard'

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
  moons?: [
    {
      moon: string
      rel: string
    }
  ]
  aroundPlanet?: {
    planet: string
    rel: string
  }
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
      <Container itemScope itemType="https://schema.org/CreativeWork">
        <Icon
          icon={Icons.longArrowLeft}
          color="#000"
          style={{ width: '25px', margin: '20px 0' }}
          onClick={onNavigateBack}
        />
        <SC.Title itemProp="name">{details.name}</SC.Title>
        <SC.Section>
          <SC.Text itemProp="description">
            {displayValue('bodyType', details.bodyType)}
            <PlanetBodyTypeIcon bodyType={details.bodyType} />
          </SC.Text>
          <SC.Text>{displayValue('density', details.density)}</SC.Text>
          <SC.Text>{displayValue('gravity', details.gravity)}</SC.Text>
          <SC.Text>{displayValue('avgTemp', details.avgTemp)}</SC.Text>
          <SC.Text itemProp="dateCreated">
            {displayValue('discoveryDate', details.discoveryDate)}
          </SC.Text>
          <SC.Text itemProp="size">{displayValue('dimension', details.dimension)}</SC.Text>
          <SC.Text>{displayValue('inclination', details.inclination)}</SC.Text>
          <SC.Text>{displayValue('escape', details.escape)}</SC.Text>
        </SC.Section>
        <PlanetCard
          celestialBodyName={details?.aroundPlanet?.planet}
          link={details?.aroundPlanet?.rel}
          style={{ width: '280px' }}
        />
        <MoonCard
          relatedMoons={details.moons}
          style={{ minWidth: '280px', margin: '1rem', flex: '0 0 30%' }}
        />
      </Container>
    </>
  )
}

export default PlanetTemplate
