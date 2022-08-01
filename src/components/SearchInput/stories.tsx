import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import { searchInputArgs } from './mocks'
import SearchInput from '.'
import { SearchInputProps } from './types'

export default defaultExport({
  title: 'Components/SearchInput',
  component: SearchInput,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />

export const Default = Template.bind({})
Default.args = searchInputArgs
