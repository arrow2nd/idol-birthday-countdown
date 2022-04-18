import { useCallback, useEffect, useReducer, useRef } from 'react'

type Action = 'start' | 'stop'
type State = 'running' | 'stopped'

type Control = {
  state: State
  stop: () => void
}

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case 'start':
      return 'running'
    case 'stop':
      return 'stopped'
    default:
      return state
  }
}

export const useInterval = (callback: () => void): Control => {
  const [state, dispatch] = useReducer(reducer, 'stopped')
  const callbackRef = useRef<() => void>(callback)

  const stop = useCallback(() => dispatch('stop'), [])

  useEffect(() => dispatch('start'), [])

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    let timerId: NodeJS.Timer | undefined

    if (state === 'running') {
      timerId = setInterval(() => callbackRef.current(), 1000)
      callbackRef.current()
    } else if (timerId) {
      clearInterval(timerId)
    }

    return () => {
      timerId && clearInterval(timerId)
    }
  }, [state])

  return { state, stop }
}
