import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormLegend = ComponentProps<"legend">

export default function FormLegend({ className, ...props }: TFormLegend) {
  return (
    <legend
      {...props}
      className={twMerge("text-sm px-2 uppercase text-secondary", className)}
    />
  )
}
