import React, { CSSProperties, useEffect, useState } from 'react'

const STYLE: CSSProperties = {
  top: 0,
  right: 0,
  zIndex: 1,
  width: '175px',
  opacity: '0.9',
  color: 'rgb(46, 52, 64)',
  margin: '0.2rem',
  padding: '5px 0',
  textAlign: 'center',
  borderRadius: '6px',
  position: 'absolute',
  background: 'antiquewhite',
}

function UsabilityInfo() {
  const [windowWidth, setWindowWidth] = useState(1200)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleWindowResize = () => setWindowWidth(window.innerWidth)

  let visibility: any = 'hidden'
  if (windowWidth < 1000) {
    visibility = 'visible'
  }
  return <div style={{ ...STYLE, visibility }}>Example created for desktop dimensions</div>
}

export default UsabilityInfo
