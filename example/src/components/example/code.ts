import { TABS } from './constants'

export const CODE = {
  [TABS[0]]: `function WithMyCreativity() {
      const [visible, setVisible] = useState(false)
      const [area, setArea] = useState<Area>(INITIAL_AREA)
      const [meas, setMeas] = useState<Measurement>(INITIAL_MEASUREMENT)
    
      const image = useRef<HTMLImageElement | null>(null)
      const ref = useCroppedArea({ area, image: image.current!, drawing: visible })
    
      // delayed drawing cropped area in the canvas
      useEffect(() => {
        setTimeout(() => {
          setVisible(true)
        }, 500)
      }, [])
    
      const handleChangeArea = (key: AreaKey, value: number) => setArea((prev) => ({ ...prev!, [key]: value }))
      const handleChangeMeas = (key: MeasurementKey, value: number) => setMeas((prev) => ({ ...prev!, [key]: value }))
    
      return (
            <Content>
              <SubContent gap='1rem'>
                <ContentPart>
                    <OriginalTools {...area} onChange={handleChangeArea} />
                </ContentPart>
        
                <ContentPart title='Original:'>
                    <ImageWithCrop
                      ref={image}
                      area={area}
                      src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'
                    />
                </ContentPart>
        
                <ContentPart title='Cropped:'>
                    <CroppedArea ref={ref} {...area} {...meas} />
                </ContentPart>
        
                <ContentPart>
                    <CroppedTools {...meas} onChange={handleChangeMeas} />
                </ContentPart>
              </SubContent>
              ...
            </Content>
        )
}`,

  [TABS[1]]: `function OriginalTools({ x, y, width, height, onChange }: Props) {
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target['ariaLabel'], +e.target.value)
      return (
            <>
                <InputWithLabel label='x' value={x} onChange={handleChange} />
                <InputWithLabel label='y' value={y} onChange={handleChange} />
                <InputWithLabel
                    type='range'
                    label='width'
                    value={width}
                    max={MAX_VALUE}
                    onChange={handleChange}
                />
                <InputWithLabel
                    type='range'
                    label='height'
                    value={height}
                    max={MAX_VALUE}
                    onChange={handleChange}
                />
           </>
     )
}`,
  [TABS[2]]: `function ImageWithCrop({ area, src }: Props, ref?: ForwardedRef<HTMLImageElement>) {
      const { hostname } = new URL(src)
      return (
          <div style={STYLE.WRAPPER}> 
              <Crop {...area} /> 
              <img ref={ref} src={src} alt={hostname} style={STYLE.IMAGE} /> 
          </div>
      )
}
      
function Crop(props: Props) {
      return (
          <div
            style={{
              ...STYLE.CROP,
              ...props,
              top: props.y,
              left: props.x,
            }}
          />
      )
}`,
  [TABS[3]]: `function CroppedArea({ width, height, zoom, scale, rotate }: Props, ref?: ForwardedRef<HTMLCanvasElement>) { 
      const canvasStyle = {
            ...CANVAS_STYLES,
            width: width * zoom, 
            height: height * zoom, 
            transform: 'scale(${`scale`}) rotate(${`rotate`}deg)',
      }
      return <canvas ref={ref} style={canvasStyle} />
}`,
  [TABS[4]]: `function CroppedTools({ zoom, scale, rotate, onChange }: Props) { 
     const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target['ariaLabel'], +e.target.value) 
     return ( 
           <> 
              <InputWithLabel label='zoom' value={zoom} onChange={handleChange} /> 
              <InputWithLabel label='scale' value={scale} onChange={handleChange} /> 
              <InputWithLabel label='rotate' value={rotate} onChange={handleChange} /> 
           </>
     )
}`,
}
