import { AREA, MEAS } from './constants'

export type MeasKey = (typeof MEAS)[keyof typeof MEAS]
export type Meas = Record<MeasKey, number>

export type AreaKey = (typeof AREA)[keyof typeof AREA]
export type Area = Record<AreaKey, number>

export type Areas = {
  x: number
  y: number
  width: number
  height: number
}
