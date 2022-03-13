import { useState } from 'react'
import Button from './components/Button'
import Display from './components/Display'
import drumMachineData from './drumMachineData'

const App = () => {
  const [displayText, setDisplayText] = useState('')

  return (
    <div
      className="w-128 border-8 border-cyan-700 rounded-lg p-8 bg-cyan-500 grid grid-cols-6 grid-rows-3 gap-4"
      id="drum-machine"
    >
      {drumMachineData.map(({ buttonLabel, displayText, src }, index) => {
        // Tailwind requires that class names are hardcoded in full strings.
        const rowStart = ['row-start-1', 'row-start-2', 'row-start-3']
        return (
          <Button
            label={buttonLabel}
            audioSrc={src}
            displayText={displayText}
            className={rowStart[Math.floor(index / 3)]}
            onPlay={setDisplayText}
            key={buttonLabel}
          />
        )
      })}
      <Display
        className="col-start-5 row-start-2 col-span-2"
        label={displayText}
      />
    </div>
  )
}

export default App
