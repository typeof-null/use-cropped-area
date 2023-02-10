import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'
import React, { useRef, useState, useEffect } from 'react'
import { useCroppedArea } from 'use-cropped-area'
import Content, { ContentPart, SubContent } from '../content'
import { TabContent } from '../tabs/components'
import Details from '../details'
import Tabs from '../tabs'
import { OriginalTools, ImageWithCrop, CroppedArea, CroppedTools } from './components'
import { INITIAL_AREA, INITIAL_MEAS, TABS } from './constants'
import { Area, AreaKey, Meas, MeasKey } from './types'
import { CODE } from './code'

function Example() {
  const [chosen, setChosen] = useState('')
  const [area, setArea] = useState<Area>(INITIAL_AREA)
  const [meas, setMeas] = useState<Meas>(INITIAL_MEAS)
  const [visible, setVisible] = useState(false)

  const image = useRef<HTMLImageElement | null>(null)
  const ref = useCroppedArea({ area: area!, image: image.current!, visible })

  // delayed drawing cropped area in the canvas
  // for first render
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 500)
  }, [])

  const handleChangeArea = (key: AreaKey, value: number) => setArea((prev) => ({ ...prev, [key]: value }))
  const handleChangeMeas = (key: MeasKey, value: number) => setMeas((prev) => ({ ...prev, [key]: value }))
  const handleToggleDetails = (open: boolean) => {
    if (open) {
      setChosen(TABS[0])
      return
    }
    setChosen('')
  }
  const handleClick = (tabName: string) => {
    if (chosen !== tabName) {
      setChosen(tabName)
    }
  }

  return (
    <Content title='my creativity'>
      <SubContent gap='1rem' highlight={chosen === TABS[0]}>
        <ContentPart highlight={chosen === TABS[1]}>
          <OriginalTools {...area} onChange={handleChangeArea} />
        </ContentPart>

        <ContentPart title='Original:' highlight={chosen === TABS[2]}>
          <ImageWithCrop
            ref={image}
            area={area}
            src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'
          />
        </ContentPart>

        <ContentPart title='Cropped:' highlight={chosen === TABS[3]}>
          <CroppedArea ref={ref} {...area} {...meas} />
        </ContentPart>

        <ContentPart highlight={chosen === TABS[4]}>
          <CroppedTools {...meas} onChange={handleChangeMeas} />
        </ContentPart>
      </SubContent>

      <SubContent marginTop='2rem'>
        <Details title='Source code' onClick={handleToggleDetails}>
          <Tabs tabs={TABS} activeTab={chosen} onClick={handleClick}>
            <TabContent>
              <SyntaxHighlighter showLineNumbers wrapLines language='typescript' style={nord}>
                {CODE[chosen]}
              </SyntaxHighlighter>
            </TabContent>
          </Tabs>
        </Details>
      </SubContent>
    </Content>
  )
}

export default Example
