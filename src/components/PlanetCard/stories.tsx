import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetCard from '.'
import { PlanetCardProps } from './types'

export default defaultExport({
  title: 'Components/PlanetCard',
  component: PlanetCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetCardSimple: Story<PlanetCardProps> = (arg) => <PlanetCard {...arg} />
