"use client"

import { DocumentService } from "@/services/DocumentService"
import { TDocumentResponse } from "@/services/types"
import { createContext, useEffect, useState } from "react"
import { TDocumentContext, TDocumentProviderProps } from "./types"

export const DocumentContext = createContext({} as TDocumentContext)

export function DocumentProvider({ children }: TDocumentProviderProps) {
  const [documents, setDocuments] = useState<TDocumentResponse[]>([])

  const loadDocuments = async () => {
    const result = await DocumentService.show()

    setDocuments(result)
  }

  useEffect(() => {
    loadDocuments()
  }, [])

  return (
    <DocumentContext.Provider
      value={{
        documents,
        onDocuments: setDocuments,
        onLoadDocuments: loadDocuments,
      }}
    >
      {children}
    </DocumentContext.Provider>
  )
}
