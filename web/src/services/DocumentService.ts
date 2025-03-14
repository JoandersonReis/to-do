import { api } from "./api"
import { TDocumentCreate, TDocumentResponse, TDocumentWithTasks } from "./types"

export class DocumentService {
  async create(
    documentData: TDocumentCreate
  ): Promise<TDocumentResponse | null> {
    const { data } = await api.post("/documents", documentData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  async single(document_id: string): Promise<TDocumentWithTasks | null> {
    const { data } = await api.get<TDocumentWithTasks>("/documents", {
      params: {
        id: document_id,
      },
    })

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  async show() {
    const { data } = await api.get<TDocumentResponse[]>("/documents")

    return data
  }

  async update(
    documentData: TDocumentCreate
  ): Promise<TDocumentResponse | null> {
    const { data } = await api.put("/documents", documentData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  async delete(document_id: string): Promise<TDocumentResponse | null> {
    const { data } = await api.delete<TDocumentResponse>("/documents", {
      params: {
        id: document_id,
      },
    })

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }
}
