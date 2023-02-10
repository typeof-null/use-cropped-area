import { createElement, CSSProperties, ReactNode } from 'react'

const STYLES = {
  color: 'rgb(46, 52, 64)',
}
const STYLE = {
  p: {},
  span: {},
  mark: {},
}

type Props = CSSProperties & {
  type?: 'p' | 'span' | 'mark'
  children: ReactNode
}
function Text({ type = 'span', children, ...rest }: Props) {
  const styles = { ...STYLES, ...STYLE[type], ...rest }

  return createElement(type, { style: styles }, children)
}

export default Text
