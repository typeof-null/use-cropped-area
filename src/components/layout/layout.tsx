import React, { ReactNode } from 'react'
import UsabilityInfo from '../usability-info'
import Title from '../title'

const STYLE = {
  HEADER: { width: '100%', padding: '3rem 4rem 0' },
  MAIN: {
    width: '100%',
    height: '100%',
    display: 'flex',
    margin: '0 auto',
    padding: '0 4rem 3rem',
    justifyContent: 'space-between',
  },
}

type Props = {
  children: ReactNode
}
function Layout({ children }: Props) {
  return (
    <>
      <header style={STYLE.HEADER}>
        <Title>Example</Title>
      </header>
      <main style={STYLE.MAIN}>{children}</main>
      <UsabilityInfo />
    </>
  )
}

export default Layout
