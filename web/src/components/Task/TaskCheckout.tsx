"use client"

import clsx from "clsx"
import { Check } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TTaskCheckout = ComponentProps<"button"> & {
  done: boolean
}

export default function TaskCheckout({
  className,
  children,
  done,
  ...props
}: TTaskCheckout) {
  return (
    <button
      {...props}
      className={twMerge("flex items-center gap-2 cursor-pointer", className)}
    >
      <div
        className={clsx(
          "w-[18px] h-[18px] border  rounded-xs flex items-center justify-center transition-all",
          {
            "bg-primary border-primary": done,
            "border-zinc-700": !done,
          }
        )}
      >
        {done && <Check size={18} />}
      </div>

      <span
        className={clsx(
          "flex items-center transition-all relative after:content-[''] after:absolute after:w-0 duration-700 after:h-[1px] after:bg-white after:left-0",
          {
            "after:animate-expand": done,
          }
        )}
      >
        {children}
      </span>
    </button>
  )
}
