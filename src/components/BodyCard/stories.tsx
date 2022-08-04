import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import BodyCard from '.'
import { BodyCardProps } from './types'

export default defaultExport({
  title: 'Components/BodyCard',
  component: BodyCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetCardSimple: Story<BodyCardProps> = (arg) => <BodyCard {...arg} />
