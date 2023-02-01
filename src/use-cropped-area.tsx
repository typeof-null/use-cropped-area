import { useEffect, useRef, RefObject } from 'react'

export type Area = {
  x: number
  y: number
  width: number
  height: number
}

export const getCroppedArea = (image: HTMLImageElement, canvas: HTMLCanvasElement, area: Area, scale = 1): void => {
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  const pixelRatio = window.devicePixelRatio

  canvas.width = Math.floor(area.width * scaleX * pixelRatio)
  canvas.height = Math.floor(area.height * scaleY * pixelRatio)

  ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  const areaX = area.x * scaleX
  const areaY = area.y * scaleY

  const centerX = image.naturalWidth / 2
  const centerY = image.naturalHeight / 2

  ctx.save()

  ctx.translate(-areaX, -areaY)
  ctx.translate(centerX, centerY)
  ctx.scale(scale, scale)
  ctx.translate(-centerX, -centerY)
  ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight)

  ctx.restore()
}

type Params = {
  area: Area
  image: HTMLImageElement
  visible?: boolean
}

function useCroppedArea({ area, image, visible = true }: Params): RefObject<HTMLCanvasElement> {
  const ref = useRef<HTMLCanvasElement>(null)
  const canvas = ref.current

  useEffect(() => {
    if (visible && canvas && image && area) {
      getCroppedArea(image, canvas, area)
    }
  }, [visible, canvas, image, area])

  return ref
}

export default useCroppedArea
