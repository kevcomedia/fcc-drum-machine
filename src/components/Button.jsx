import { useEffect, useRef } from 'react'

const Button = ({ label, audioSrc, className }) => {
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

  return (
    <button
      className={`${className} drum-pad bg-green-500 hover:bg-green-400 text-lg font-bold p-2 aspect-square border border-green-900 rounded shadow-button shadow-green-900 active:bg-yellow-500 active:border-yellow-900 active:translate-y-2 active:shadow-none`}
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
