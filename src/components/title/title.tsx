import { createElement, CSSProperties, ReactNode } from 'react'

const STYLES = {
  color: 'rgb(46, 52, 64)',
}
const STYLE = {
  h1: { fontSize: '3rem', marginBottom: '0.5rem' },
  h2: {},
  h3: { fontSize: '1.5rem' },
  h4: {},
  h5: {},
  h6: {},
}

type Props = CSSProperties & {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}
function Title({ type = 'h1', children, ...rest }: Props) {
  const styles = { ...STYLES, ...STYLE[type], ...rest }

  return createElement(type, { style: styles }, children)
}

export default Title
