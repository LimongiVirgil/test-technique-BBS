import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'
import Icon from '../Icon'

import { PlanetBodyTypeIconArgs } from './mocks'
import PlanetBodyTypeIcon from '.'
import { PlanetBodyTypeIconProps, Icons } from './types'

export default defaultExport({
  title: 'Components/PlanetBodyTypeIcon',
  component: PlanetBodyTypeIcon,
  viewport: null,
  containerStyle: { padding: '3rem' },
  argTypes: {
    width: {
      control: {
        type: 'range',
        step: 2,
        min: 15,
        max: 200,
      },
    },
  },
})

// ALL

const ListSC = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ListItemSC = styled.div<{ width: number }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${({ width }) => `${width + 80}px`};
  margin-bottom: 30px;

  p {
    font-size: 13px;
    font-family: sans-serif;
    text-align: center;
    margin-top: 15px;
  }
`

const IconSC = styled(Icon)<{ width: number }>`
  width: ${({ width }) => width}px;
`

export const All: Story<PlanetBodyTypeIconProps & { width: number }> = (arg) => {
  return (
    <ListSC>
      {Object.keys(Icons).map((key) => (
        <ListItemSC key={key} width={arg.width}>
          <IconSC key={key} {...arg} icon={Icons[key as Icons]} />
          <p>{key}</p>
        </ListItemSC>
      ))}
    </ListSC>
  )
}

All.args = {
  width: 42,
}

//Simple

const PlanetBodyTypeIconSimple: Story<PlanetBodyTypeIconProps & { width: number }> = (arg) => (
  <PlanetBodyTypeIcon {...arg} />
)

export const Default = PlanetBodyTypeIconSimple.bind({})
Default.args = PlanetBodyTypeIconArgs
