import React from 'react'

const STYLE = { fontSize: '1.5rem', borderBottom: '3px solid black' }

type Props = {
  href: string
  text: string
}
function OutsideLink({ href, text }: Props) {
  return (
    <a target='_blank' rel='noopener noreferrer' href={href} style={STYLE}>
      {text}
    </a>
  )
}

export default OutsideLink