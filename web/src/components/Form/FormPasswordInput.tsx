"use client"

import { Eye, EyeOff } from "lucide-react"
import { ComponentProps, useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { Form } from "."
import Button from "../Button"

type TFormPasswordInput = ComponentProps<"input"> & {
  labelField?: string
  register?: UseFormRegister<any>
  name: string
  error?: string
}

export default function FormPasswordInput({
  className,
  labelField = "Senha",
  error,
  ...props
}: TFormPasswordInput) {
  const [isShow, setIsShow] = useState(false)

  const onIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      <Form.Label htmlFor={props.id}>{labelField}</Form.Label>

      <div className="flex">
        <Form.Input
          {...props}
          className={twMerge("flex-1 border-r-0 rounded-r-none", className)}
          type={isShow ? "text" : "password"}
        />
        <Button
          className="w-8 h-8 min-w-8 rounded-none rounded-r-md"
          onClick={onIsShow}
          type="button"
        >
          {isShow ? (
            <EyeOff size={18} color="#fff" />
          ) : (
            <Eye size={18} color="#fff" />
          )}
        </Button>
      </div>

      {error && <Form.InputMessage>{error}</Form.InputMessage>}
    </div>
  )
}
