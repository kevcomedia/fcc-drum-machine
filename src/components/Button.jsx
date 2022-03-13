import { useState, useEffect, useRef } from 'react'

const Button = ({ label, audioSrc, className }) => {
  const statefulClasses = {
    default: 'bg-green-500 hover:bg-green-400 border-green-900 shadow-button',
    active: 'bg-yellow-500 border-yellow-900 translate-y-2 shadow-none',
  }

  const [activeClasses, setActiveClasses] = useState(statefulClasses.default)
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  useEffect(() => {
    const handler = (event) => {
      if (event.keyCode == label.charCodeAt()) {
        playAudio()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  })

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.keyCode == label.charCodeAt()) {
        setActiveClasses(statefulClasses.active)
      }
    }
    const keyUpHandler = (event) => {
      if (event.keyCode == label.charCodeAt()) {
        setActiveClasses(statefulClasses.default)
      }
    }

    window.addEventListener('keydown', keyDownHandler)
    window.addEventListener('keyup', keyUpHandler)
    return () => {
      window.removeEventListener('keydown', keyDownHandler)
      window.removeEventListener('keyup', keyUpHandler)
    }
  })

  return (
    <button
      className={`${className} ${activeClasses} drum-pad text-lg font-bold p-2 aspect-square border rounded shadow-green-900 active:bg-yellow-500 active:border-yellow-900 active:translate-y-2 active:shadow-none`}
      type="button"
      onClick={playAudio}
      id={`button-${label}`}
    >
      {label}
      {audioSrc && (
        <audio ref={audioRef} className="clip" id={label} src={audioSrc} />
      )}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

export default Button
