import React, { CSSProperties, MouseEvent } from 'react'
import { RoundedCorner } from './components'

const STYLE: CSSProperties = {
  lineHeight: 0,
  cursor: 'pointer',
  fontSize: '0.9rem',
  pointerEvents: 'all',
  padding: '20px 16px',
  position: 'relative',
  color: 'rgb(46, 52, 64)',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  transition: 'height 0.15s ease-in-out',
}

type Props = {
  text: string
  active: boolean
  onClick: (tabName: string) => void
}

function Tab({ text, active, onClick }: Props) {
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClick(text)
  }

  return (
    <li
      style={{
        ...STYLE,
        ...(active && {
          background: '#2e3440',
          color: '#F8F8F2',
        }),
      }}
      onClick={handleClick}
    >
      {text}
      {active && (
        <>
          <RoundedCorner side='left' />
          <RoundedCorner side='right' />
        </>
      )}
    </li>
  )
}

export default Tab
