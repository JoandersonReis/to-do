import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormLabel = ComponentProps<"label">

export default function FormLabel({ className, ...props }: TFormLabel) {
  return (
    <label
      {...props}
      className={twMerge(
        "text-xs uppercase opacity-60 text-white opacity-70",
        className
      )}
    />
  )
}
