import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Form } from "."

type TFormInputRadio = ComponentProps<"input"> & {
  labelField: string
}

export default function FormInputRadio({
  className,
  labelField,
  id,
  ...props
}: TFormInputRadio) {
  return (
    <div className="cursor-pointer flex items-center gap-1">
      <input
        type="radio"
        className={twMerge("", className)}
        id={id || labelField}
        {...props}
      />
      <Form.Label htmlFor={id || labelField} className="text-black text-base">
        {labelField}
      </Form.Label>
    </div>
  )
}
