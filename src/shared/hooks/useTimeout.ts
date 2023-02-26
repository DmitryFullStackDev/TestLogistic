import { useRef } from 'react'

export const useTimeout = (func: (...args: any[]) => any, delay: number) => {
  const time = useRef(null)

  return (...args) => {
    if (time.current) {
      clearTimeout(time.current)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    time.current = setTimeout(() => func(...args), delay)
  }
}
