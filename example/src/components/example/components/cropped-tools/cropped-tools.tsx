import React, { ChangeEvent } from 'react'
import InputWithLabel from '../../../input-with-label'

type Meas = 'scale' | 'rotate'
type Props = {
  zoom: number
  scale: number
  rotate: number
  onChange: (measurement: Meas, value: number) => void
}
function CroppedTools({ zoom, scale, rotate, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target['ariaLabel'] as Meas, +e.target.value)

  return (
    <>
      <InputWithLabel label='zoom' value={zoom} onChange={handleChange} />
      <InputWithLabel label='scale' value={scale} onChange={handleChange} />
      <InputWithLabel label='rotate' value={rotate} onChange={handleChange} />
    </>
  )
}

export default CroppedTools
