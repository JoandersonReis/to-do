import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormInputMessage = ComponentProps<"span">

export default function FormInputMessage({
  className,
  ...props
}: TFormInputMessage) {
  return (
    <span
      {...props}
      className={twMerge("text-red-500 uppercase text-xs", className)}
    />
  )
}
