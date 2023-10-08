import { CyclesState } from '../../contexts/types'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.Add_New_Cycle:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.data)
        draft.activeCycleId = action.payload.data.id
      })

    case ActionTypes.Interruped_Cycle: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state
      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.Mark_Current_Cycle_As_Finished: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state
      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}
