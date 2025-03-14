import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TTaskRoot = ComponentProps<"li">

export default function TaskRoot({ className, ...props }: TTaskRoot) {
  return <li {...props} className={twMerge("list-none", className)} />
}
