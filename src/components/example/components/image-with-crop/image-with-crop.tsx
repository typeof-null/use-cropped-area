import React, { CSSProperties, ForwardedRef, forwardRef } from 'react'
import { Crop } from './componenets'
import { Area } from '../../with-my-creativity'

const STYLE: Record<string, CSSProperties> = {
  WRAPPER: {
    position: 'relative',
  },
  IMAGE: {
    maxWidth: '500px',
    maxHeight: '500px',
  },
}

type Props = {
  area: Area
  src: string
}

function ImageWithCrop({ area, src }: Props, ref?: ForwardedRef<HTMLImageElement>) {
  const { hostname } = new URL(src)
  return (
    <div style={STYLE.WRAPPER}>
      <Crop {...area} />
      <img ref={ref} src={src} alt={hostname} style={STYLE.IMAGE} />
    </div>
  )
}

export default forwardRef(ImageWithCrop)
