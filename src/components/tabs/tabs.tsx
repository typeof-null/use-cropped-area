import React, { CSSProperties, ReactNode } from 'react'
import { Tab } from './components'

const STYLE: CSSProperties = {
  display: 'flex',
  marginTop: '1rem',
  padding: '0 10px',
}

type Props = {
  tabs: string[]
  activeTab: string
  children: ReactNode
  onClick: (tabName: string) => void
}

function Tabs({ tabs, activeTab, children, onClick }: Props) {
  return (
    <>
      <ul style={STYLE}>
        {tabs.map((tab) => (
          <Tab key={tab} text={tab} active={tab === activeTab} onClick={onClick} />
        ))}
      </ul>
      {children}
    </>
  )
}

export default Tabs
