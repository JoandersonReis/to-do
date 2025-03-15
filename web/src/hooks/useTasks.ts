"use client"

import { TaskState } from "@/lib/states/Task"
import { DocumentService } from "@/services/DocumentService"
import { TaskService } from "@/services/TaskService"
import { TDocumentWithTasks, TTask } from "@/services/types"
import { useParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

export default function useTasks() {
  const params = useParams()
  const [document, setDocument] = useState<TDocumentWithTasks | null>()
  const [newTask, setNewTask] = useState("")
  const taskState = new TaskState(setDocument, document)

  const loadDocument = async () => {
    const result = await DocumentService.single(String(params.id))

    setDocument(result)
  }

  const addNewTask = () => {
    taskState.addInput(newTask)
  }

  const handleNewTask = async (position: number) => {
    const result = await TaskService.create({
      name: newTask,
      document_id: document?.id || "",
    })

    if (result) {
      taskState.updateInput(position, {
        id: result.id,
        created_at: result.created_at,
        done: result.done,
        name: result.name,
      })
    }

    setNewTask("")
  }

  const onSubmit = (e: FormEvent, position: number) => {
    e.preventDefault()

    handleNewTask(position)
  }

  const onDone = async (position: number, task: TTask) => {
    await TaskService.update(
      {
        document_id: document?.id || "",
        name: task.name,
        done: !task.done,
      },
      task.id
    )

    taskState.done(position)
  }

  const onDelete = async (taskId: string) => {
    await TaskService.delete(taskId)

    taskState.delete(taskId)
  }

  useEffect(() => {
    loadDocument()
  }, [])

  return {
    document,
    newTask,
    setNewTask,
    onSubmit,
    onDone,
    addNewTask,
    onDelete,
  }
}
