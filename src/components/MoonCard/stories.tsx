import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import { MoonCardArgs } from './mocks'
import MoonCard from '.'
import { MoonCardProps } from './types'

export default defaultExport({
  title: 'Components/MoonCard',
  component: MoonCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const MoonCardError: Story<MoonCardProps> = (arg) => <MoonCard {...arg} />
const MoonCardSimple: Story<MoonCardProps> = (arg) => <MoonCard {...arg} />

export const Default = MoonCardSimple.bind({})
Default.args = MoonCardArgs
