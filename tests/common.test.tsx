import React, { useRef, useMemo, useState, CSSProperties } from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-canvas-mock'
import useCroppedArea, { Area } from '../src'

const STYLE: Record<string, CSSProperties> = {
  CONTENT: {
    gap: '2rem',
    width: '100%',
    display: 'flex',
  },
  SIDE: {
    width: '100%',
    position: 'relative',
  },
  IMAGE: {
    width: '100%',
    maxWidth: '500px',
    maxHeight: '500px',
  },
}

export const INITIAL_AREA = {
  y: 90,
  x: 200,
  width: 40,
  height: 20,
} as const

function UseCroppedAreaExample() {
  const [area] = useState<Area>(INITIAL_AREA)
  const image = useRef<HTMLImageElement | null>(null)
  const canvasRef = useCroppedArea({ area, image: image.current })

  const { width, height, x, y } = area
  const cropStyle = useMemo(
    () => ({
      width,
      height,
      top: y,
      left: x,
      position: 'absolute',
      border: '2px solid red',
    }),
    [width, height, x, y],
  )
  const croppedStyle = useMemo(
    () => ({
      width,
      height,
      border: '2px solid green',
    }),
    [width, height],
  )

  return (
    <div data-testid='content' style={STYLE.CONTENT}>
      <div data-testid='left-side' style={STYLE.SIDE}>
        <img
          ref={image}
          alt='octocat'
          style={STYLE.IMAGE}
          data-testid='image'
          src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'
        />
        <div id='crop' data-testid='crop' style={cropStyle as CSSProperties} />
      </div>
      <div data-testid='right-side' style={STYLE.SIDE}>
        <canvas ref={canvasRef} data-testid='cropped' style={croppedStyle} />
      </div>
    </div>
  )
}

describe('UseCroppedAreaExample', () => {
  it('renders without crashing', () => {
    render(<UseCroppedAreaExample />)
  })

  it('area is equal crop style ', () => {
    render(<UseCroppedAreaExample />)

    const crop = screen.getByTestId('crop') as HTMLDivElement

    expect(crop.style.top).toBe(INITIAL_AREA.y + 'px')
    expect(crop.style.left).toBe(INITIAL_AREA.x + 'px')
    expect(crop.style.width).toBe(INITIAL_AREA.width + 'px')
    expect(crop.style.height).toBe(INITIAL_AREA.height + 'px')
  })

  it("crop area's width is equal canvas width", () => {
    render(<UseCroppedAreaExample />)

    const crop = screen.getByTestId('crop') as HTMLDivElement
    const cropped = screen.getByTestId('cropped') as HTMLCanvasElement

    expect(crop.style.width).toBe(cropped.style.width)
  })

  it("crop area's height is equal canvas height", () => {
    render(<UseCroppedAreaExample />)

    const crop = screen.getByTestId('crop') as HTMLDivElement
    const cropped = screen.getByTestId('cropped') as HTMLCanvasElement

    expect(crop.style.height).toBe(cropped.style.height)
  })
})
