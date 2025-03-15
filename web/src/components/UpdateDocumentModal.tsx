"use client"

import useDocumentModal from "@/hooks/useDocumentModal"
import { TDocumentCreateSchema } from "@/schemas/document"
import { TDocumentWithTasks } from "@/services/types"
import * as Dialog from "@radix-ui/react-dialog"
import { CheckCircle, Edit2 } from "lucide-react"
import { useParams } from "next/navigation"
import Button from "./Button"
import { Form } from "./Form"
import Modal from "./Modal"

type TUpdateDocumentModalProps = {
  document: TDocumentWithTasks | null | undefined
  onDocument: (value: TDocumentWithTasks) => void
}

export default function UpdateDocumentModal({
  document,
  onDocument,
}: TUpdateDocumentModalProps) {
  const params = useParams()
  const {
    onDocumentUpdate,
    isModalOpen,
    onIsModalOpen,
    handleSubmit,
    register,
    errors,
  } = useDocumentModal()

  const onSubmit = async (data: TDocumentCreateSchema) => {
    onDocumentUpdate(data, String(params.id))

    if (document) {
      onDocument({ ...document, title: data.title })
    }
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalOpen={onIsModalOpen}
      button={
        <Button className="p-0 w-8 h-8 opacity-30">
          <Edit2 size={12} />
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        <Dialog.Title className="text-2xl uppercase text-center">
          Atualizar Documento
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
