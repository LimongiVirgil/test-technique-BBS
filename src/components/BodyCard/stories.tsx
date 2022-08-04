import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import { BodyCardArgs } from './mocks'
import BodyCard from '.'
import { BodyCardProps } from './types'

export default defaultExport({
  title: 'Components/BodyCard',
  component: BodyCard,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

const BodyCardSimple: Story<BodyCardProps> = (arg) => <BodyCard {...arg} />

export const Default = BodyCardSimple.bind({})
Default.args = BodyCardArgs
