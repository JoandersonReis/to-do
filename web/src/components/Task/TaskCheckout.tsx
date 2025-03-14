"use client"

import clsx from "clsx"
import { Check } from "lucide-react"
import { ComponentProps, useState } from "react"
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
  const [checked, setChecked] = useState(done)

  const onChecked = () => {
    setChecked(!checked)
  }

  return (
    <button
      onClick={onChecked}
      {...props}
      className={twMerge("flex items-center gap-2 cursor-pointer", className)}
    >
      <div
        className={clsx(
          "w-[18px] h-[18px] border  rounded-xs flex items-center justify-center transition-all",
          {
            "bg-primary border-primary": checked,
            "border-zinc-700": !checked,
          }
        )}
      >
        {checked && <Check size={18} />}
      </div>

      <span
        className={clsx(
          "flex items-center transition-all relative after:content-[''] after:absolute after:w-0 duration-700 after:h-[1px] after:bg-white after:left-0",
          {
            "after:animate-expand": checked,
          }
        )}
      >
        {children}
      </span>
    </button>
  )
}
