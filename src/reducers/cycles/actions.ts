import { CycleProps } from '../../contexts/types'

export enum ActionTypes {
  Add_New_Cycle = 'Add_New_Cycle',
  Interruped_Cycle = 'Interruped_Cycle',
  Mark_Current_Cycle_As_Finished = 'Mark_Current_Cycle_As_Finished',
}

export function addNewCycleAction(newCycle: CycleProps) {
  return {
    type: ActionTypes.Add_New_Cycle,
    payload: { data: newCycle },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.Mark_Current_Cycle_As_Finished,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.Interruped_Cycle,
  }
}
