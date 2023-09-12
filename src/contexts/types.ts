import type { ReactNode } from 'react'

export type CreateCycleData = {
  task: string
  minutesAmount: number
}

export type CycleProps = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export type CyclesContextType = {
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
}

export type CyclesContexProviderProps = {
  children: ReactNode
}
