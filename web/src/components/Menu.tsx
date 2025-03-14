"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import NewDocumentModal from "./NewDocumentModal"
import { SideBar } from "./SideBar"

export default function Menu() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "faculdade",
      created_at: new Date(),
    },
    {
      id: "2",
      title: "programação",
      created_at: new Date(),
    },
    {
      id: "3",
      title: "tarefas",
      created_at: new Date(),
    },
  ])

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
          {documents.map((document) => (
            <SideBar.Item key={document.id}>
              <SideBar.Link href={`document/${document.id}`}>
                {document.title}
              </SideBar.Link>
            </SideBar.Item>
          ))}
        </SideBar.Navigation>
      </SideBar.Container>
    </SideBar.Root>
  )
}
