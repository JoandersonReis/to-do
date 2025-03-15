import { ComponentProps } from "react"
import { Task } from "./Task"

type TTaskItem = ComponentProps<"div"> & {
  onDone?: VoidFunction
  done: boolean
}

export default function TaskItem({ children, onDone, done }: TTaskItem) {
  return (
    <Task.Root>
      <Task.Checkout onClick={onDone} done={done}>
        {children}
      </Task.Checkout>
    </Task.Root>
  )
}
