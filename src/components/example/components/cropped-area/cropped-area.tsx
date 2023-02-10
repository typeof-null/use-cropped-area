import React, { CSSProperties, ForwardedRef, forwardRef, memo } from 'react'
import { Area, Meas } from '../../types'

const CANVAS_STYLES = {
  borderRadius: '4px',
  border: '2px solid dimgray',
  boxShadow: '1px -0.5px 24px -4px #fff',
}

type Props = Area & Meas & { style?: CSSProperties }

function CroppedArea({ width, height, zoom, scale, rotate, style }: Props, ref?: ForwardedRef<HTMLCanvasElement>) {
  const canvasStyle: CSSProperties = {
    ...CANVAS_STYLES,
    width: width * zoom,
    height: height * zoom,
    transform: `scale(${scale}) rotate(${rotate}deg)`,
  }
  return <canvas ref={ref} style={{ ...canvasStyle, ...style }} />
}

export default memo(forwardRef(CroppedArea))
