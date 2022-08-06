import React, { FC } from 'react'

import BodyCard from '../BodyCard'

import { MoonCardProps } from './types'
import * as SC from './styled'

const MoonCard: FC<MoonCardProps> = ({ relatedMoons, style }) => {
  if (!relatedMoons) {
    return (
      <SC.Section>
        <SC.SubTitle>Lune à proximité:</SC.SubTitle>
        <SC.TextError>Aucune lune alentoure</SC.TextError>
      </SC.Section>
    )
  }

  return (
    <SC.Section itemScope itemType="https://schema.org/ItemList">
      <SC.SubTitle>Lune à proximité:</SC.SubTitle>
      <SC.DivCardContainer>
        {relatedMoons?.map((moon) => (
          <BodyCard key={moon.moon} celestialBodyName={moon.moon} link={moon.rel} style={style} />
        ))}
      </SC.DivCardContainer>
    </SC.Section>
  )
}

export default MoonCard
