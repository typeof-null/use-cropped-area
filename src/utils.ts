import { Area } from './types'

export function drawFromCroppedArea(area: Area, image: HTMLImageElement, canvas: HTMLCanvasElement): void {
  const ctx = canvas?.getContext('2d')

  if (!ctx) {
    throw new Error(
      'I cant drawing 2d context on the canvas. Please check that you set the `ref` in the canvas element and that the `ref` is used in one canvas.',
    )
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
  ctx.scale(1, 1)
  ctx.translate(-centerX, -centerY)
  ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight)

  ctx.restore()
}
