import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import HomeTemplate, { HomeTemplateProps } from './index'
import { homeArgs } from './mocks'

export default defaultExport({
  title: 'Templates/Home',
  component: HomeTemplate,
  argTypes: {
    onChange: { action: 'change', description: 'Event applied on search input' },
    planets: { description: 'Array of planets with different properties' },
    search: { description: 'Value of search input' },
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

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate {...args} />

export const Default = Template.bind({})
Default.args = homeArgs
