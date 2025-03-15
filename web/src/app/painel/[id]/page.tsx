"use client"

import Button from "@/components/Button"
import { Form } from "@/components/Form"
import TaskItem from "@/components/TaskItem"
import { Utils } from "@/lib/Utils"
import { DocumentService } from "@/services/DocumentService"
import { TaskService } from "@/services/TaskService"
import { TDocumentWithTasks, TTask } from "@/services/types"
import { Edit2, Plus } from "lucide-react"
import { useParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

export default function Page() {
  const params = useParams()
  const [document, setDocument] = useState<TDocumentWithTasks | null>()
  const [newTask, setNewTask] = useState("")

  const loadDocument = async () => {
    const result = await DocumentService.single(String(params.id))

    setDocument(result)
  }

  const addNewTask = (position: number) => {
    const tasks = document?.Task || []
    const tasksUpdated = Utils.addObjectInArrayPosition<TTask>(
      tasks,
      position,
      {
        created_at: String(new Date()),
        done: false,
        name: "",
        id: "0",
      }
    )

    if (document) {
      setDocument({ ...document, Task: tasksUpdated })
    }
  }

  const handleNewTask = async (position: number) => {
    const result = await TaskService.create({
      name: newTask,
      document_id: document?.id || "",
      position,
    })

    if (document && result) {
      let tasksUpdated = document.Task
      tasksUpdated[position] = {
        created_at: result.created_at,
        done: result.done,
        id: result.id,
        name: result.name,
      }
    }

    setNewTask("")
  }

  const onSubmit = (e: FormEvent, position: number) => {
    e.preventDefault()

    handleNewTask(position)
  }

  useEffect(() => {
    loadDocument()
  }, [])

  return (
    <div className="h-full flex flex-col items-center">
      <section className="flex flex-col gap-8 max-w-[600px] w-full">
        <h1 className="text-white text-4xl uppercase underline flex items-center gap-2">
          {document && document.title}

          <Button className="p-0 w-8 h-8 opacity-30">
            <Edit2 size={12} />
          </Button>
        </h1>

        <div>
          {document && document?.Task.length > 0 ? (
            document.Task.map((task, index) =>
              task.id === "0" ? (
                <Form.Root
                  onSubmit={(e) => onSubmit(e, index)}
                  className="my-2"
                >
                  <Form.Input
                    key={task.id}
                    name="name"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                </Form.Root>
              ) : (
                <div className="flex gap-2 items-center group" key={task.id}>
                  <TaskItem>{task.name}</TaskItem>
                  <Button
                    onClick={() => addNewTask(index)}
                    className="p-0 h-6 w-6 bg-primary"
                  >
                    <Plus size={12} />
                  </Button>
                </div>
              )
            )
          ) : (
            <div className="flex flex-col gap-2">
              <h2 className="text-zinc-500">Nenhuma tarefa adicionada</h2>

              <Button onClick={() => addNewTask(0)}>Nova Tarefa</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
