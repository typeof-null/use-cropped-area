import { AREA } from './constants'

/**
 * Key of Area
 */
export type AreaKey = (typeof AREA)[keyof typeof AREA]

/**
 * Area
 */
export type Area = Record<AreaKey, number>

/**
 * CroppedArea
 */
export type CroppedArea = {
  /**
   * Area which will be cropped from the image.
   */
  area: Area | null | undefined
  /**
   * HTMLImageElement which is used for cropping area.
   */
  image: HTMLImageElement | null | undefined
  /**
   * Control of drawing the canvas element.
   *
   * If `true`, the hook is drawing canvas from cropped area.
   * @default true
   */
  drawing?: boolean
}
