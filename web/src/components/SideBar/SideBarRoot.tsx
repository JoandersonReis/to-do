import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarRoot = ComponentProps<"div">

export default function SideBarRoot({ className, ...props }: TSideBarRoot) {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-secondary max-w-[250px] w-full p-4 flex flex-col gap-8",
        className
      )}
    />
  )
}
