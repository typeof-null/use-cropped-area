import React, { CSSProperties, ReactNode } from 'react'
import Title from '../title'
import Text from '../text'

const STYLE: CSSProperties = { display: 'flex', flexDirection: 'column', width: '100%' }
const SECTION: CSSProperties = { display: 'flex', gap: '1rem', flexDirection: 'column', width: '100%' }

type Props = CSSProperties & {
  title?: string
  children: ReactNode
}
function Content({ title, children, ...rest }: Props) {
  const id = title?.split(' ').join('') ?? ''

  return (
    <section id={id} style={STYLE}>
      {!!title?.length && (
        <Title type='h3' color='lightslategrey' marginBottom='2rem'>
          with <Text fontSize='1.5rem'>{title}</Text>
        </Title>
      )}
      <section style={{ ...SECTION, ...rest }}>{children}</section>
    </section>
  )
}

export default Content
