"use client"

import { DocumentContext } from "@/contexts/DocumentProvider"
import { BaseState } from "@/lib/states/Base"
import { DocumentService } from "@/services/DocumentService"
import { TDocumentResponse } from "@/services/types"
import { MenuIcon, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import Action from "./ActionPopover"
import NewDocumentModal from "./NewDocumentModal"
import { SideBar } from "./SideBar"

export default function Menu() {
  const { documents, onDocuments } = useContext(DocumentContext)
  const baseState = new BaseState<TDocumentResponse>(onDocuments, documents)
  const router = useRouter()

  const onDelete = async (document_id: string) => {
    await DocumentService.delete(document_id)

    baseState.delete(document_id)

    router.push("/painel")
  }

  return (
    <SideBar.Root>
      <div className="flex flex-col gap-2">
        <SideBar.ToggleButton>
          <MenuIcon color="#fff" size={22} /> Minimizar
        </SideBar.ToggleButton>

        <NewDocumentModal />
      </div>

      <SideBar.Container className="flex flex-col gap-2 ">
        <h2 className="opacity-70 uppercase text-xs border-b border-b-white/10 pb-2">
          Documentos
        </h2>
        <SideBar.Navigation>
          {documents &&
            documents.map((document) => (
              <SideBar.Item key={document.id}>
                <SideBar.Link href={`/painel/${document.id}`}>
                  {document.title}
                </SideBar.Link>

                <Action
                  onConfirm={() => onDelete(document.id)}
                  className="bg-red-500"
                >
                  <Trash size={12} color="#fff" />
                </Action>
              </SideBar.Item>
            ))}
        </SideBar.Navigation>
      </SideBar.Container>
    </SideBar.Root>
  )
}
