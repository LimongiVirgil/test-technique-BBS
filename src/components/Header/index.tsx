import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Icon from '../Icon'
import { Icons } from '../../components/Icon/types'

import * as SC from './styled'

const Header = () => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <SC.Header id={'header'}>
      <SC.Button onClick={handleClick} aria-label="navigate to the list of planets">
        <Icon icon={Icons.planet} style={{ width: '50px', margin: '20px 0 0' }} />
        <SC.Text>Planètes et corps célestes</SC.Text>
      </SC.Button>
    </SC.Header>
  )
}

export default Header
