import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import Header from '.'

export default defaultExport({
  title: 'Components/Header',
  component: Header,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const Default: Story = () => <Header />
