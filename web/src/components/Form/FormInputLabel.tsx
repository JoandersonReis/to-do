import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { Form } from "."

type TFormInputLabel = ComponentProps<"input"> & {
  labelField: string
  register?: UseFormRegister<any>
  name: string
  error?: string
}

export default function FormInputLabel({
  className,
  labelField,
  error,
  ...props
}: TFormInputLabel) {
  return (
    <div className="flex-1">
      <Form.Label htmlFor={props.id}>{labelField}</Form.Label>
      <Form.Input {...props} className={twMerge("", className)} />
      {error && <Form.InputMessage>{error}</Form.InputMessage>}
    </div>
  )
}
