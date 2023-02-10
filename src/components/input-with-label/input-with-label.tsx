import React, { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from 'react'

const STYLE: CSSProperties = { display: 'flex', flexDirection: 'column', marginBottom: '1rem' }
const LABEL_STYLE: CSSProperties = { marginBottom: '0.5rem', textTransform: 'uppercase', color: 'rgb(46, 52, 64)' }

type Props = {
  type?: HTMLInputTypeAttribute
  label: string
  value: number
  max?: number
  styles?: {
    label?: CSSProperties
    input?: CSSProperties
    wrapper?: CSSProperties
  }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function InputWithLabel({ type = 'number', label, value, max, styles, onChange }: Props) {
  return (
    <div style={{ ...STYLE, ...styles?.wrapper }}>
      <label style={{ ...LABEL_STYLE, ...styles?.label }}>{`${label}:`}</label>
      <input
        type={type}
        value={value}
        min={1}
        max={max}
        style={styles?.input}
        aria-label={label.toLowerCase()}
        onChange={onChange}
      />
    </div>
  )
}

export default InputWithLabel
