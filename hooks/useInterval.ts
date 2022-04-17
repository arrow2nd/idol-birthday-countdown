import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void) => {
  const callbackRef = useRef<() => void>(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const id = setInterval(() => callbackRef.current(), 1000)
    callbackRef.current()
    return () => clearInterval(id)
  }, [])
}
