import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Form } from "."

type TFormSelectLabel = ComponentProps<"select"> & {
  labelField: string
  name: string
}

export default function FormSelectLabel({
  className,
  labelField,
  ...props
}: TFormSelectLabel) {
  return (
    <div>
      <Form.Label htmlFor={props.id}>{labelField}</Form.Label>
      <Form.Select {...props} className={twMerge("", className)} />
    </div>
  )
}
