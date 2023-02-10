import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function TabContent({ children }: Props) {
  return (
    <div
      style={{
        background: '#2e3440',
        width: '100%',
      }}
    >
      <div
        style={{
          minHeight: '350px',
          padding: '10px',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default TabContent
