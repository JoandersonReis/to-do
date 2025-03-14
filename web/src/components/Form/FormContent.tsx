import clsx from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormContent = ComponentProps<"fieldset"> & {
  border?: boolean
}

export default function FormContent({
  className,
  border,
  ...props
}: TFormContent) {
  return (
    <fieldset
      {...props}
      className={twMerge(
        clsx("w-full", {
          "border border-secondary/30 rounded-sm p-4": border,
        }),
        className
      )}
    />
  )
}
