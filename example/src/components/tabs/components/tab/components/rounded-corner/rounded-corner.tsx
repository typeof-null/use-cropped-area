import React, { CSSProperties } from 'react'

const STYLE: Record<string, CSSProperties> = {
  SQUARE: {
    bottom: 0,
    width: '10px',
    height: '10px',
    position: 'absolute',
    background: '#2e3440',
  },
  ROUNDED_CORNER: {
    width: '10px',
    height: '10px',
    background: '#f0f8ff',
  },
}

type Props = {
  side: 'left' | 'right'
}
function RoundedCorner({ side }: Props) {
  return (
    <div
      style={{
        ...STYLE.SQUARE,
        [side]: '-10px',
      }}
    >
      <div
        style={{
          ...STYLE.ROUNDED_CORNER,
          [side === 'left' ? 'borderBottomRightRadius' : 'borderBottomLeftRadius']: '12px',
        }}
      />
    </div>
  )
}

export default RoundedCorner
