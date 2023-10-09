import { createContext, useEffect, useReducer, useState } from 'react'
import * as T from './types'
import { cyclesReducer } from '../reducers/cycles/reducers'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

export const CyclesContext = createContext({} as T.CyclesContextType)

export function CyclesContextProvider({
  children,
}: T.CyclesContexProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return { initialState }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles?.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const createNewCycle = (data: T.CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: T.CycleProps = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction())

    markCurrentCycleAsFinished()
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        interruptCurrentCycle,
        createNewCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
