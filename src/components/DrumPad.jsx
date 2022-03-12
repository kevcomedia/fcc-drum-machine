import Button from './Button'

const DrumPad = ({ label, className }) => {
  return (
    <div className={`${className} drum-pad aspect-square flex`} id={label}>
      <Button className="grow" label={label} />
    </div>
  )
}

DrumPad.defaultProps = {
  className: '',
}

export default DrumPad
