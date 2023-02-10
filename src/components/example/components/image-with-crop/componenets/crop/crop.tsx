import React, { CSSProperties } from 'react'
import { Area } from '../../../../with-my-creativity'

const STYLE: CSSProperties = {
  borderRadius: '4px',
  position: 'absolute',
  border: '2px dashed red',
}

type Props = Area & CSSProperties

function Crop(props: Props) {
  return (
    <div
      style={{
        ...STYLE,
        ...props,
        top: props.y,
        left: props.x,
      }}
    />
  )
}

export default Crop
