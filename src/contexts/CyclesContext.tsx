import { createContext, useReducer, useState } from 'react'
import * as T from './types'

export const CyclesContext = createContext({} as T.CyclesContextType)

export function CyclesContextProvider({
  children,
}: T.CyclesContexProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: T.CyclesState, action: any) => {
      switch (action.type) {
        case 'Add_New_Cycle':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.data],
            activeCycleId: action.payload.data.id,
          }
        case 'Interruped_Cycle':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }
        case 'Mark_Current_Cycle_As_Finished':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }
        default:
          return state
      }
    },
    { cycles: [], activeCycleId: null },
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'Mark_Current_Cycle_As_Finished',
      payload: { activeCycleId },
    })
  }

  const createNewCycle = (data: T.CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: T.CycleProps = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    }

    dispatch({
      type: 'Add_New_Cycle',
      payload: { data: newCycle },
    })

    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch({
      type: 'Interruped_Cycle',
      payload: { activeCycleId },
    })

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
