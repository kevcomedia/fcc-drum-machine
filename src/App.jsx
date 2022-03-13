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
      <Button
        label="Q"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      />
      <Button
        label="W"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      />
      <Button
        label="E"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      />
      <Button
        className="row-start-2"
        label="A"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      />
      <Button
        className="row-start-2"
        label="S"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      />
      <Button
        className="row-start-2"
        label="D"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      />
      <Button
        className="row-start-3"
        label="Z"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      />
      <Button
        className="row-start-3"
        label="X"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      />
      <Button
        className="row-start-3"
        label="C"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      />
      <Display
        className="col-start-5 row-start-2 col-span-2"
        label={displayText}
      />
    </div>
  )
}

export default App
