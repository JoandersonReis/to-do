"use client"

import { DocumentContext } from "@/contexts/DocumentProvider"
import { BaseState } from "@/lib/states/Base"
import { documentCreateSchema, TDocumentCreateSchema } from "@/schemas/document"
import { DocumentService } from "@/services/DocumentService"
import { TDocumentWithTasks } from "@/services/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ComponentProps, useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { Form } from "./Form"

type TEditDocumentForm = ComponentProps<"form"> & {
  onDocument: (value: TDocumentWithTasks) => void
  document: TDocumentWithTasks | null | undefined
}

export default function EditDocumentForm({
  className,
  onDocument,
  document,
  ...props
}: TEditDocumentForm) {
  const { onDocuments, documents } = useContext(DocumentContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm<TDocumentCreateSchema>({
    resolver: zodResolver(documentCreateSchema),
  })

  const baseState = new BaseState(onDocuments, documents)

  const onUpdate = async (title: string) => {
    if (document) {
      await DocumentService.update({ title }, document.id)

      onDocument({ ...document, title })
      baseState.update(document.id, "title", title)
    }
  }

  const onSubmit = async (data: TDocumentCreateSchema) => {
    onUpdate(data.title)
  }

  useEffect(() => {
    if (document) {
      setValue("title", document.title)
    }
  }, [])

  return (
    <Form.Root
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("", className)}
    >
      <Form.Input
        className="h-12 uppercase border-0 outline-0 p-0 underline text-4xl"
        name="title"
        maxLength={50}
        register={register}
        defaultValue={document?.title}
        onBlurCapture={(e) => onUpdate(e.target.value)}
      />
      <Form.InputMessage>{errors.title?.message}</Form.InputMessage>
    </Form.Root>
  )
}
