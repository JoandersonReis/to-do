"use client"

import useDocumentModal from "@/hooks/useDocumentModal"
import * as Dialog from "@radix-ui/react-dialog"
import { CheckCircle } from "lucide-react"
import Button from "./Button"
import { Form } from "./Form"
import Modal from "./Modal"

export default function NewDocumentModal() {
  const {
    onDocumentCreate,
    isModalOpen,
    onIsModalOpen,
    handleSubmit,
    register,
    errors,
  } = useDocumentModal()

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalOpen={onIsModalOpen}
      button={<Button className="h-10 px-8">Novo Documento</Button>}
    >
      <div className="flex flex-col gap-6">
        <Dialog.Title className="text-2xl uppercase text-center">
          Adicione um novo documento
        </Dialog.Title>

        <Form.Root onSubmit={handleSubmit(onDocumentCreate)}>
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
