import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core'
import React, { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import SearchInput from '../../components/SearchInput'

import * as SC from './styled'

type Planet = {
  id?: string
  name?: string
  englishName?: string
  bodyType?: string
  discoveredBy?: string
  discoveryDate?: string
}

export type HomeTemplateProps = {
  planets: Planet[]
  search: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const HomeTemplate: FC<HomeTemplateProps> = ({ planets, search, onChange }) => {
  const { t: translate } = useTranslation()
  const history = useHistory()

  const handleTableRowClick = useCallback(
    (id: string | undefined) => {
      if (typeof id !== undefined) {
        history.push(`planet/${id}`)
      }
    },
    [history]
  )

  return (
    <Container>
      <SearchInput
        search={search}
        placeholder={translate('searchInputPlaceholder')}
        onChange={onChange}
      />
      <TableContainer component={Paper}>
        <Table aria-label="caption table" itemScope itemType="https://schema.org/ItemList">
          <caption itemProp="description">List of planets</caption>
          <TableHead>
            <TableRow>
              <TableCell>{translate('name')}</TableCell>
              <TableCell align="right">{translate('englishName')}</TableCell>
              <TableCell align="right">{translate('bodyType')}</TableCell>
              <TableCell align="right">{translate('discoveredBy')}</TableCell>
              <TableCell align="right">{translate('discoveryDate')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {planets.map((planet, index) => (
              <SC.TableRow
                style={{ cursor: 'pointer' }}
                key={planet.id}
                onClick={() => handleTableRowClick(planet.id)}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                aria-describedby={'Planet: ' + planet.name}
              >
                <TableCell itemProp="name">
                  <SC.Button aria-label={'See details of ' + planet.name}>{planet.name}</SC.Button>
                </TableCell>
                <TableCell align="right" itemProp="alternateName">
                  {planet.englishName}
                </TableCell>
                <TableCell align="right" itemProp="description">
                  {planet.bodyType}
                </TableCell>
                <TableCell align="right">{planet.discoveredBy}</TableCell>
                <TableCell align="right">{planet.discoveryDate}</TableCell>
              </SC.TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default HomeTemplate
