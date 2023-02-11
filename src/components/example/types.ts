import { MEAS } from './constants'

export type MeasKey = (typeof MEAS)[keyof typeof MEAS]
export type Meas = Record<MeasKey, number>
