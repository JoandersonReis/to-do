import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

type TFormInput = ComponentProps<"input"> & {
  register?: UseFormRegister<any>
  name: string
}

export default function FormInput({
  className,
  register,
  name,
  ...props
}: TFormInput) {
  return register ? (
    <input
      {...props}
      {...register(name)}
      className={twMerge(
        "h-8 w-full rounded-md border border-zinc-400/50 px-2",
        className
      )}
    />
  ) : (
    <input
      {...props}
      className={twMerge(
        "h-8 w-full rounded-md border border-zinc-400/50 px-2",
        className
      )}
    />
  )
}
