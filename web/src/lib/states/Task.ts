import { TDocumentWithTasks, TTask } from "@/services/types"

export type TState = (value: TDocumentWithTasks) => void

export class TaskState {
  private onState
  private state

  constructor(onState: TState, state: TDocumentWithTasks | null | undefined) {
    this.onState = onState
    this.state = state
  }

  addInput(name: string) {
    if (this.state) {
      this.onState({
        ...this.state,
        Task: [
          ...this.state.Task,
          {
            id: "0",
            created_at: String(new Date()),
            name: name,
            done: false,
          },
        ],
      })
    }
  }

  updateInput(position: number, taskUpdated: TTask) {
    if (this.state) {
      const stateUpdated = this.state.Task.map((task, index) => {
        if (index === position) {
          return taskUpdated
        }

        return task
      })

      this.onState({ ...this.state, Task: stateUpdated })
    }
  }

  done(position: number) {
    if (this.state) {
      const stateUpdated = this.state.Task.map((task, index) => {
        if (position === index) {
          return { ...task, done: !task.done }
        }

        return task
      })

      this.onState({ ...this.state, Task: stateUpdated })
    }
  }

  delete(id: string) {
    if (this.state) {
      const stateUpdated = this.state.Task.filter((item) => item.id !== id)

      this.onState({ ...this.state, Task: stateUpdated })
    }
  }
}
