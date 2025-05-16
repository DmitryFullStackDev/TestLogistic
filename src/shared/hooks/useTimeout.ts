import { useRef } from 'react'

export const useTimeout = (
  func: (...args: any[]) => any,
  delay: number,
  onComplete?: () => void,
) => {
  const time = useRef(null)

  return (...args: any[]) => {
    if (time.current) {
      clearTimeout(time.current)
    }

    time.current = setTimeout(() => {
      func(...args)
      if (onComplete) {
        onComplete()
      }
    }, delay)
  }
}
