import React, { CSSProperties, ReactNode } from 'react'
import Highlight from '../../../highlight'
import Title from '../../../title'

const STYLE: CSSProperties = {
  display: 'flex',
  borderRadius: '8px',
  padding: '12px 20px',
  position: 'relative',
  flexDirection: 'column',
  border: '2px solid dimgray',
}

type Props = CSSProperties & {
  title?: string
  highlight?: boolean
  children: ReactNode
}
function ContentPart({ title, highlight = false, children, ...rest }: Props) {
  return (
    <div style={{ ...STYLE, ...rest }}>
      {!!title?.length && (
        <Title type='h4' marginBottom='0.5rem'>
          {title}
        </Title>
      )}
      {children}
      {highlight && <Highlight />}
    </div>
  )
}

export default ContentPart
