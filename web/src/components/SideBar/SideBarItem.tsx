import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarItem = ComponentProps<"li">

export default function SideBarItem({ className, ...props }: TSideBarItem) {
  return <li {...props} className={twMerge("", className)} />
}
