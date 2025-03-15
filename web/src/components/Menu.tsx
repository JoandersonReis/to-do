"use client"

import { DocumentContext } from "@/contexts/DocumentProvider"
import { BaseState } from "@/lib/states/Base"
import { DocumentService } from "@/services/DocumentService"
import { TDocumentResponse } from "@/services/types"
import clsx from "clsx"
import { MenuIcon, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import Action from "./ActionPopover"
import NewDocumentModal from "./NewDocumentModal"
import { SideBar } from "./SideBar"

export default function Menu() {
  const { documents, onDocuments } = useContext(DocumentContext)
  const baseState = new BaseState<TDocumentResponse>(onDocuments, documents)
  const router = useRouter()
  const [hidden, setHidden] = useState(true)

  const onDelete = async (document_id: string) => {
    await DocumentService.delete(document_id)

    baseState.delete(document_id)

    router.push("/painel")
  }

  return (
    <SideBar.Root
      className={clsx("absolute h-screen z-2 md:relative transition-all", {
        "translate-x-[-250px] md:translate-x-0": hidden,
      })}
    >
      <div className="flex flex-col gap-2">
        <SideBar.ToggleButton
          onClick={() => setHidden(!hidden)}
          className={clsx("flex md:hidden", {
            "absolute right-[-50px] top-4 h-10 w-10": hidden,
          })}
        >
          <MenuIcon color="#fff" size={22} />
        </SideBar.ToggleButton>

        <NewDocumentModal />
      </div>

      <SideBar.Container className="flex flex-col gap-2">
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
