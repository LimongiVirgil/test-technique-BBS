import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardContent, CardActions } from '@material-ui/core'

import { BodyCardProps } from './types'
import * as SC from './styled'

const BodyCard: FC<BodyCardProps> = ({ celestialBodyName, link, style }) => {
  const history = useHistory()

  const getBodyNamefromUrl = link?.substring(link?.lastIndexOf('/') + 1)

  const handleClick = useCallback(
    (getBodyNamefromUrl: string) => {
      if (getBodyNamefromUrl) {
        history.push(`${getBodyNamefromUrl}`)
      }
    },
    [history]
  )

  if (!celestialBodyName) {
    return <SC.TextError>Aucune planète alentoure</SC.TextError>
  }

  return (
    <Card style={style}>
      <CardContent>
        <SC.Text>Nom: {celestialBodyName}</SC.Text>
        <CardActions>
          <SC.Button onClick={() => handleClick(getBodyNamefromUrl!)}>
            Voir ces informations
          </SC.Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default BodyCard
