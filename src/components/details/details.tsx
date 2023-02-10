import React, { CSSProperties, ReactNode, useState } from 'react'

const STYLE: Record<string, CSSProperties> = {
  DETAILS: {
    width: '100%',
    borderRadius: '8px',
    pointerEvents: 'none',
    border: '2px solid dimgray',
  },
  SUMMARY: {
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '10px 12px',
    pointerEvents: 'all',
    color: 'rgb(46, 52, 64)',
  },
}

type Props = {
  title: string
  children: ReactNode
  onClick: (open: boolean) => void
}
function Details({ title, children, onClick }: Props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
    onClick(!open)
  }

  return (
    <details style={STYLE.DETAILS} onClick={handleClick}>
      <summary style={STYLE.SUMMARY}>{title}</summary>
      {open && children}
    </details>
  )
}

export default Details
