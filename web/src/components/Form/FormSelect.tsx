import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

type TFormSelect = ComponentProps<"select"> & {
  register?: UseFormRegister<any>
  name: string
}

export default function FormSelect({
  className,
  name,
  register,
  ...props
}: TFormSelect) {
  return register ? (
    <select
      {...props}
      {...register(name)}
      className={twMerge(
        "h-8 w-full rounded-sm border border-secondary/30 px-1",
        className
      )}
    />
  ) : (
    <select
      {...props}
      className={twMerge(
        "h-8 w-full rounded-sm border border-secondary/30 px-1",
        className
      )}
    />
  )
}
