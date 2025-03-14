import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TButton = ComponentProps<"button">

export default function Button({ className, ...props }: TButton) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-3 text-white rounded-md px-3 bg-primary cursor-pointer opacity-80 hover:opacity-100 transition-all",
        className
      )}
    />
  )
}
