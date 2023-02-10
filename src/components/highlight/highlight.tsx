import React, { CSSProperties } from 'react'

const STYLE: CSSProperties = {
  top: '-14px',
  left: '-5px',
  content: ' ',
  height: '108%',
  width: '107%',
  zIndex: '-1',
  display: 'block',
  marginLeft: '-3px',
  marginRight: '-3px',
  position: 'absolute',
  background: '#ffd500',
  transform: ' rotate(2deg)',
  padding: '10px 3px 3px 10px',
  borderRadius: '20% 25% 20% 24%',
}

type Props = CSSProperties
function Highlight(props: Props) {
  return <div style={{ ...STYLE, ...props }} />
}

export default Highlight
