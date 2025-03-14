import { TDocumentResponse } from "@/services/types"
import { ReactNode } from "react"

export type TDocumentProviderProps = {
  children: ReactNode
}

export type TDocumentContext = {
  documents: TDocumentResponse[]
  onDocuments: (documents: TDocumentResponse[]) => void
  onLoadDocuments: VoidFunction
}
