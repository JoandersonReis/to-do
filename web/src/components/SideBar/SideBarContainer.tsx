import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarContainer = ComponentProps<"nav">

export default function SideBarContainer({
  className,
  ...props
}: TSideBarContainer) {
  return <nav {...props} className={twMerge("", className)} />
}
