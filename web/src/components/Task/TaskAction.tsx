import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "../Button"

type TTaskAction = ComponentProps<"button">

export default function TaskAction({ className, ...props }: TTaskAction) {
  return <Button {...props} className={twMerge("p-0 h-4 w-4", className)} />
}
