import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarItem = ComponentProps<"li">

export default function SideBarItem({ className, ...props }: TSideBarItem) {
  return (
    <li
      {...props}
      className={twMerge(
        "h-10 flex items-center justify-between px-2 bg-background opacity-70 hover:opacity-100 transition-all rounded-md",
        className
      )}
    />
  )
}
