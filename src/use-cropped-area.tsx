import { useEffect, useRef, RefObject } from 'react'
import { drawFromCroppedArea } from './utils'
import { CroppedArea } from './types'

/**
 *
 * The hook is drawing canvas from the cropped area of image.
 *
 * - [Example](https://typeof-null.github.io/use-cropped-area)
 *
 * - [API](https://www.npmjs.com/package/use-cropped-area#api)
 *
 * @return `ref` for canvas element
 *
 */
function useCroppedArea({ area, image, drawing = true }: CroppedArea): RefObject<HTMLCanvasElement> {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const canvas = ref.current!

  useEffect(() => {
    if (drawing && area && image && canvas) {
      drawFromCroppedArea(area, image, canvas)
    }
  }, [area, image, canvas, drawing])

  return ref
}

export default useCroppedArea
