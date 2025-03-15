"use client"

import Button from "@/components/Button"
import { Form } from "@/components/Form"
import { Task } from "@/components/Task"
import TaskItem from "@/components/TaskItem"
import UpdateDocumentModal from "@/components/UpdateDocumentModal"
import useTasks from "@/hooks/useTasks"
import { Plus, X } from "lucide-react"

export default function Tasks() {
  const {
    addNewTask,
    document,
    newTask,
    onDone,
    onSubmit,
    setNewTask,
    onDelete,
    onDocument,
  } = useTasks()

  return (
    <div className="h-full flex flex-col items-center">
      <section className="flex flex-col gap-8 max-w-[600px] w-full">
        <h1 className="text-white text-4xl uppercase underline flex items-center gap-2">
          {document && document.title}

          <UpdateDocumentModal document={document} onDocument={onDocument} />
        </h1>

        <div>
          {document && document?.Task.length > 0 ? (
            document.Task.map((task, index) =>
              task.id === "0" ? (
                <Form.Root
                  onSubmit={(e) => onSubmit(e, index)}
                  className="my-2"
                  key={task.id}
                >
                  <Form.Input
                    className="outline-0 border-0"
                    name="name"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    autoFocus
                    onBlur={() => onDelete(task.id, true)}
                  />
                </Form.Root>
              ) : (
                <div className="flex gap-2 items-center group" key={task.id}>
                  <TaskItem onDone={() => onDone(index, task)} done={task.done}>
                    {task.name}
                  </TaskItem>

                  <div className="flex items-center gap-1">
                    {index === document.Task.length - 1 && (
                      <Task.Action onClick={addNewTask} className="bg-primary">
                        <Plus size={12} />
                      </Task.Action>
                    )}

                    <Task.Action
                      onClick={() => onDelete(task.id)}
                      className="bg-red-500 md:opacity-0 md:group-hover:opacity-100"
                    >
                      <X size={12} />
                    </Task.Action>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="flex flex-col gap-2">
              <h2 className="text-zinc-500">Nenhuma tarefa adicionada</h2>

              <Button onClick={addNewTask}>Nova Tarefa</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
