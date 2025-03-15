import { api } from "./api"
import { TDocumentCreate, TDocumentResponse, TDocumentWithTasks } from "./types"

export class DocumentService {
  static async create(
    documentData: TDocumentCreate
  ): Promise<TDocumentResponse | null> {
    const { data } = await api.post("/documents", documentData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  static async single(document_id: string): Promise<TDocumentWithTasks | null> {
    const { data } = await api.get<TDocumentWithTasks>(
      `/documents/${document_id}`
    )

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  static async show() {
    const { data } = await api.get<TDocumentResponse[]>("/documents")

    return data
  }

  static async update(
    documentData: TDocumentCreate,
    document_id: string
  ): Promise<TDocumentResponse | null> {
    const { data } = await api.put(`/documents/${document_id}`, documentData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  static async delete(document_id: string): Promise<TDocumentResponse | null> {
    const { data } = await api.delete<TDocumentResponse>(
      `/documents/${document_id}`
    )

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }
}
