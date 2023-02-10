import React, { ChangeEvent } from 'react'
import InputWithLabel from '../../../input-with-label'

const MAX_VALUE = 200

type Meas = 'x' | 'y' | 'width' | 'height'
type Props = {
  x: number
  y: number
  width: number
  height: number
  onChange: (measurement: Meas, value: number) => void
}
function OriginalTools({ x, y, width, height, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target['ariaLabel'] as Meas, +e.target.value)

  return (
    <>
      <InputWithLabel label='x' value={x} onChange={handleChange} />
      <InputWithLabel label='y' value={y} onChange={handleChange} />
      <InputWithLabel
        type='range'
        label='width'
        value={width}
        max={MAX_VALUE}
        // styles={INPUT_STYLE}
        onChange={handleChange}
      />
      <InputWithLabel
        type='range'
        label='height'
        value={height}
        max={MAX_VALUE}
        // styles={INPUT_STYLE}
        onChange={handleChange}
      />
    </>
  )
}

export default OriginalTools
