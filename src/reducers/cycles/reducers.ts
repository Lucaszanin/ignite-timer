import { CyclesState } from '../../contexts/types'
import { ActionTypes } from './actions'

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.Add_New_Cycle:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.data],
        activeCycleId: action.payload.data.id,
      }
    case ActionTypes.Interruped_Cycle:
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
    case ActionTypes.Mark_Current_Cycle_As_Finished:
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
}
