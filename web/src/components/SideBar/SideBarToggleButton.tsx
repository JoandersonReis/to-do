import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "../Button"

type TSideBarToggleButton = ComponentProps<"button">

export default function SideBarToggleButton({
  className,
  ...props
}: TSideBarToggleButton) {
  return (
    <Button
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-2 bg-primary h-10 w-full uppercase",
        className
      )}
    />
  )
}
