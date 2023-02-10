import React, { CSSProperties, ReactNode } from 'react'
import Highlight from '../../../highlight'

const STYLE: CSSProperties = { display: 'flex', flexDirection: 'row', position: 'relative' }

type Props = CSSProperties & {
  highlight?: boolean
  children: ReactNode
}

function SubContent({ children, highlight = false, ...rest }: Props) {
  return (
    <div style={{ ...STYLE, ...rest }}>
      {children}
      {highlight && <Highlight />}
    </div>
  )
}

export default SubContent
