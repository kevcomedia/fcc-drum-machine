import { useEffect, useRef } from 'react'
import useStatefulClassNames from '../hooks/useStatefulClassNames'

const Button = ({ label, audioSrc, displayText, className, onPlay }) => {
  const audioRef = useRef(null)
  const activeClasses = useStatefulClassNames(label, {
    default: 'bg-green-500 hover:bg-green-400 border-green-900 shadow-button',
    active: 'bg-yellow-500 border-yellow-900 translate-y-2 shadow-none',
  })

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      onPlay(displayText)
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
