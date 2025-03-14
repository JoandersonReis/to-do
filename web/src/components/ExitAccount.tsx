"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "./Button"

type TExitAccount = ComponentProps<"button">

export default function ExitAccount({ className, ...props }: TExitAccount) {
  const router = useRouter()

  const onLogout = () => {
    localStorage.clear()

    router.push("/")
  }

  return (
    <Button
      onClick={onLogout}
      {...props}
      className={twMerge("bg-red-500 uppercase gap-2", className)}
    >
      <X size={18} /> Sair
    </Button>
  )
}
