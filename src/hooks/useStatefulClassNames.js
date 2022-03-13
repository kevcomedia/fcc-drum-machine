import { useState, useEffect } from 'react'

const useStatefulClassNames = (label, classes) => {
  const [activeClasses, setActiveClasses] = useState(classes.default)

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.keyCode == label.charCodeAt()) {
        setActiveClasses(classes.active)
      }
    }
    const keyUpHandler = (event) => {
      if (event.keyCode == label.charCodeAt()) {
        setActiveClasses(classes.default)
      }
    }

    window.addEventListener('keydown', keyDownHandler)
    window.addEventListener('keyup', keyUpHandler)
    return () => {
      window.removeEventListener('keydown', keyDownHandler)
      window.removeEventListener('keyup', keyUpHandler)
    }
  })

  return activeClasses
}

export default useStatefulClassNames
