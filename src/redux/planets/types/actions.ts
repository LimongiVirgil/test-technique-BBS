import { PayloadAction } from '@reduxjs/toolkit'

import { Planet } from './state'

export type getPlanetsSuccess = PayloadAction<{
  bodies: Planet[]
}>

export type setSearchSuccess = PayloadAction<string>
