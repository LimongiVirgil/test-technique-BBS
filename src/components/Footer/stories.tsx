import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import Footer from '.'

export default defaultExport({
  title: 'Components/Footer',
  component: Footer,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

export const Default: Story = () => <Footer />
