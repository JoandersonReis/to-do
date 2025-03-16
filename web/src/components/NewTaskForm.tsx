import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Form } from "./Form"

type TNewTaskForm = ComponentProps<"form"> & {
  newTaskName: string
  setNewTaskName: (name: string) => void
  onDelete: VoidFunction
}

export default function NewTaskForm({
  className,
  newTaskName,
  setNewTaskName,
  onDelete,
  ...props
}: TNewTaskForm) {
  return (
    <Form.Root {...props} className={twMerge("my-2", className)}>
      <Form.Input
        className="outline-0 border-0"
        name="name"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        autoFocus
        onBlur={onDelete}
      />
    </Form.Root>
  )
}
