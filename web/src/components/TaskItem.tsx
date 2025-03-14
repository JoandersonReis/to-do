import { ComponentProps } from "react"
import { Task } from "./Task"

type TTaskItem = ComponentProps<"div">

export default function TaskItem({ children }: TTaskItem) {
  return (
    <Task.Root>
      <Task.Checkout>{children}</Task.Checkout>
    </Task.Root>
  )
}
