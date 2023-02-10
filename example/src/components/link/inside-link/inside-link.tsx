import React from 'react'

const STYLE = { fontSize: '1.5rem', borderBottom: '3px solid black' }

type Props = {
  href: string
  text: string
}
function InsideLink({ href, text }: Props) {
  return (
    <a href={href} style={STYLE}>
      {text}
    </a>
  )
}

export default InsideLink
