import Button from './Button'

const DrumPad = ({ label, audioSrc, className }) => {
  return (
    <div className={`${className} drum-pad aspect-square flex`} id={label}>
      <Button className="grow" label={label} />
      {audioSrc && <audio className="clip" id={label} src={audioSrc} />}
    </div>
  )
}

DrumPad.defaultProps = {
  className: '',
}

export default DrumPad
