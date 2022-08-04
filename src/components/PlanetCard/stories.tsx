import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import { PlanetCardArgs } from './mocks'
import PlanetCard from '.'
import { PlanetCardProps } from './types'

export default defaultExport({
  title: 'Components/PlanetCard',
  component: PlanetCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetCardError: Story<PlanetCardProps> = (arg) => <PlanetCard {...arg} />
const PlanetCardSimple: Story<PlanetCardProps> = (arg) => <PlanetCard {...arg} />

export const Default = PlanetCardSimple.bind({})
Default.args = PlanetCardArgs
