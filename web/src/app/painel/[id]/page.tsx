"use client"

import TaskItem from "@/components/TaskItem"
import { DocumentService } from "@/services/DocumentService"
import { TDocumentWithTasks } from "@/services/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {
  const params = useParams()
  const [document, setDocument] = useState<TDocumentWithTasks | null>()

  const loadDocument = async () => {
    const result = await DocumentService.single(String(params.id))

    setDocument(result)
  }

  useEffect(() => {
    loadDocument()
  }, [])

  return (
    <div className="h-full flex flex-col items-center">
      <section className="flex flex-col gap-8 max-w-[600px] w-full">
        <h1 className="text-white text-4xl uppercase underline">
          {document && document.title}
        </h1>

        <div>
          {document && document?.Task.length > 0 ? (
            document.Task.map((task) => (
              <TaskItem key={task.id}>{task.name}</TaskItem>
            ))
          ) : (
            <h2 className="text-zinc-500">Nenhuma tarefa adicionada</h2>
          )}
        </div>
      </section>
    </div>
  )
}
