import { useState, useEffect } from 'react'

const useFitText = (text, ref, options = {}) => {
  const [fontSize, setFontSize] = useState(options.defaultSize || 14)

  useEffect(() => {
    try {
      const rect = ref.current.getBoundingClientRect() || {}
      const area = (rect.width || 0) * (rect.height || 0)
      const minSize = options.minSize || options.defaultSize || 14
      const maxSize = options.maxSize || options.defaultSize || 140
      const fontSize = Math.min(
        Math.max(Math.sqrt(area / text.length), minSize),
        maxSize
      )
      setFontSize(fontSize)
    } catch {}
  }, [ref.current])
  return fontSize
}

export default useFitText
