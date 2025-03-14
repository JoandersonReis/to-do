import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormRoot = ComponentProps<"form">

export default function FormRoot({ className, ...props }: TFormRoot) {
  return <form {...props} className={twMerge("", className)} />
}
