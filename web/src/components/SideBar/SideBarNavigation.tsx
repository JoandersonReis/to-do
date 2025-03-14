import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarNavigation = ComponentProps<"ul">

export default function SideBarNavigation({
  className,
  ...props
}: TSideBarNavigation) {
  return <ul {...props} className={twMerge("flex flex-col gap-4", className)} />
}
