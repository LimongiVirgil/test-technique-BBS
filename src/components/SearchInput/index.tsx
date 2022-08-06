import React, { FC } from 'react'
import { Input } from '@material-ui/core'

import { SearchInputProps } from './types'
import * as SC from './styled'

const SearchInput: FC<SearchInputProps> = ({ search, placeholder, onChange }) => {
  return (
    <SC.Div itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
      <Input
        style={{ width: '100%' }}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        value={search}
        itemProp="query"
      />
    </SC.Div>
  )
}

export default SearchInput
