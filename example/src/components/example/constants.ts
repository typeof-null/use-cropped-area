export const TABS = [
  'with-my-creativity.tsx',
  'original-tools.tsx',
  'image-with-crop.tsx',
  'cropped-area.tsx',
  'cropped-tools.tsx',
]

export const INITIAL_AREA = {
  x: 200,
  y: 90,
  width: 40,
  height: 20,
} as const

export const INITIAL_MEAS = {
  scale: 1,
  zoom: 1,
  rotate: 0,
} as const

export const AREA = {
  X: 'x',
  Y: 'y',
  width: 'width',
  height: 'height',
} as const

export const MEAS = {
  SCALE: 'scale',
  ZOOM: 'zoom',
  ROTATE: 'rotate',
} as const
