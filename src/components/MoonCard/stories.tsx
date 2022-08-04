import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import MoonCard from '.'
import { MoonCardProps } from './types'

export default defaultExport({
  title: 'Components/MoonCard',
  component: MoonCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetCardSimple: Story<MoonCardProps> = (arg) => <MoonCard {...arg} />
