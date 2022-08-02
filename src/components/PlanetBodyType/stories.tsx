import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetBodyType from '.'
import { PlanetBodyTypeProps } from './types'

export default defaultExport({
  title: 'Components/PlanetBodyType',
  component: PlanetBodyType,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetBodyTypeSimple: Story<PlanetBodyTypeProps> = (arg) => <PlanetBodyType {...arg} />
