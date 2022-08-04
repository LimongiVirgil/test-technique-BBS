import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetBodyTypeIcon from '.'
import { PlanetBodyTypeIconProps } from './types'

export default defaultExport({
  title: 'Components/PlanetBodyTypeIcon',
  component: PlanetBodyTypeIcon,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const PlanetBodyTypeIconSimple: Story<PlanetBodyTypeIconProps> = (arg) => <PlanetBodyTypeIcon {...arg} />
