type TStateBase<T> = T & {
  id: string
}

export type TStateFunction<T> = (value: TStateBase<T>[]) => void

export class BaseState<T> {
  private onState
  private state

  constructor(
    onState: TStateFunction<T>,
    state: TStateBase<T>[] | null | undefined
  ) {
    this.onState = onState
    this.state = state
  }

  public delete(id: string) {
    if (this.state) {
      const stateUpdated = this.state.filter((item) => item.id !== id)

      this.onState(stateUpdated)
    }
  }

  public update(id: string, key: string, value: string) {
    if (this.state) {
      const stateUpdated = this.state.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value }
        }

        return item
      })

      this.onState(stateUpdated)
    }
  }
}
