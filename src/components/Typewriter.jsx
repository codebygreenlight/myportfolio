import { useState, useEffect } from 'react'

function Typewriter({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      // When typing is complete, wait for a pause and then reset
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, speed * 10) // Longer pause at the end before repeating

      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text, speed])

  return <span>{displayText}</span>
}

export default Typewriter 