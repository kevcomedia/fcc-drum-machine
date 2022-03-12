import Button from './components/Button'
import Display from './components/Display'

const App = () => {
  return (
    <div
      className="w-128 border-8 border-cyan-700 rounded-lg p-8 bg-cyan-500 grid grid-cols-6 grid-rows-3 gap-4"
      id="drum-machine"
    >
      <Button label="Q" />
      <Button label="W" />
      <Button label="E" />
      <Button className="row-start-2" label="A" />
      <Button className="row-start-2" label="S" />
      <Button className="row-start-2" label="D" />
      <Button className="row-start-3" label="Z" />
      <Button className="row-start-3" label="X" />
      <Button className="row-start-3" label="C" />
      <Display className="col-start-5 row-start-2 col-span-2" label="display" />
    </div>
  )
}

export default App
