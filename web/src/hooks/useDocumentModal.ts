"use client"

import { DocumentContext } from "@/contexts/DocumentProvider"
import { documentCreateSchema, TDocumentCreateSchema } from "@/schemas/document"
import { DocumentService } from "@/services/DocumentService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

export default function useDocumentModal() {
  const { onDocuments, documents } = useContext(DocumentContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDocumentCreateSchema>({
    resolver: zodResolver(documentCreateSchema),
  })

  const onDocumentCreate = async (data: TDocumentCreateSchema) => {
    const result = await DocumentService.create(data)

    if (!result?.status && result) {
      onDocuments([result, ...documents])

      setIsModalOpen(false)
    }
  }

  const onDocumentUpdate = async (
    data: TDocumentCreateSchema,
    document_id: string
  ) => {
    const result = await DocumentService.update(data, document_id)

    if (result && !result.status) {
      setIsModalOpen(false)
    }
  }

  return {
    isModalOpen,
    onDocumentCreate,
    onDocumentUpdate,
    register,
    handleSubmit,
    onIsModalOpen: setIsModalOpen,
    errors,
  }
}
