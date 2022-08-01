import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetTemplate, { PlanetTemplateProps } from './index'
import { planetArgs } from './mocks'

export default defaultExport({
  title: 'Templates/Planet',
  component: PlanetTemplate,
  argTypes: {
    onNavigateBack: { action: 'clicked', description: 'Fire when click on back arrow' },
    details: { description: 'Single object informations' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'DesktopSmall',
    },
    backgrounds: {
      default: 'light',
    },
  },
})

const Template: Story<PlanetTemplateProps> = (args) => <PlanetTemplate {...args} />

export const Default = Template.bind({})
Default.args = planetArgs
