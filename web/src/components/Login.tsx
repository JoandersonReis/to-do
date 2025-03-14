"use client"

import { loginUserSchema, TLoginUserSchema } from "@/schemas/user"
import { UserService } from "@/services/UserService"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { Form } from "./Form"

export default function Login() {
  const navigation = useRouter()
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm<TLoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  })

  const onSubmit = async (data: TLoginUserSchema) => {
    const result = await UserService.login(data.username)

    if (result.token) {
      navigation.push("/painel")
    }
  }

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[600px] p-10 shadow bg-secondary rounded-2xl flex flex-col gap-6"
    >
      <h1 className="text-3xl uppercase">
        Entre para começar sua lista de tarefas
      </h1>

      <Form.Content className="flex flex-col gap-4">
        <Form.InputLabel
          name="username"
          labelField="Nome de usuário"
          register={register}
          error={errors.username?.message}
        />

        <Button>
          <CheckCircle size={22} /> Entrar
        </Button>
      </Form.Content>
    </Form.Root>
  )
}
