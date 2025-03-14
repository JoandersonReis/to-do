"use client"

import { DocumentContext } from "@/contexts/DocumentProvider"
import { documentCreateSchema, TDocumentCreateSchema } from "@/schemas/document"
import { DocumentService } from "@/services/DocumentService"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { CheckCircle } from "lucide-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { Form } from "./Form"
import Modal from "./Modal"

export default function NewDocumentModal() {
  const { onDocuments, documents } = useContext(DocumentContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDocumentCreateSchema>({
    resolver: zodResolver(documentCreateSchema),
  })

  const onSubmit = async (data: TDocumentCreateSchema) => {
    const result = await DocumentService.create(data)

    if (!result?.status && result) {
      onDocuments([result, ...documents])

      setIsModalOpen(false)
    }
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalOpen={setIsModalOpen}
      button={<Button className="h-10 px-8">Novo Documento</Button>}
    >
      <div className="flex flex-col gap-6">
        <Dialog.Title className="text-2xl uppercase text-center">
          Adicione um novo documento
        </Dialog.Title>

        <Form.Root onSubmit={handleSubmit(onSubmit)}>
          <Form.Content className="flex flex-col gap-4">
            <Form.InputLabel
              name="title"
              labelField="Título"
              register={register}
              error={errors.title?.message}
            />

            <Button className="w-full h-10">
              <CheckCircle size={22} /> Salvar
            </Button>
          </Form.Content>
        </Form.Root>
      </div>
    </Modal>
  )
}
