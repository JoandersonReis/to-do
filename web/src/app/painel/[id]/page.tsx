"use client"

import Button from "@/components/Button"
import { Form } from "@/components/Form"
import TaskItem from "@/components/TaskItem"
import useTasks from "@/hooks/useTasks"
import { Edit2, Plus, X } from "lucide-react"

export default function Tasks() {
  const {
    addNewTask,
    document,
    newTask,
    onDone,
    onSubmit,
    setNewTask,
    onDelete,
  } = useTasks()

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
                  key={task.id}
                >
                  <Form.Input
                    name="name"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                </Form.Root>
              ) : (
                <div className="flex gap-2 items-center group" key={task.id}>
                  <TaskItem onDone={() => onDone(index, task)} done={task.done}>
                    {task.name}
                  </TaskItem>

                  <div className="flex items-center gap-1">
                    {index === document.Task.length - 1 && (
                      <Button
                        onClick={addNewTask}
                        className="p-0 h-4 w-4 bg-primary"
                      >
                        <Plus size={12} />
                      </Button>
                    )}

                    <Button
                      onClick={() => onDelete(task.id)}
                      className="p-0 h-4 w-4 bg-red-500 md:opacity-0 md:group-hover:opacity-100"
                    >
                      <X size={12} />
                    </Button>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="flex flex-col gap-2">
              <h2 className="text-zinc-500">Nenhuma tarefa adicionada</h2>

              <Button onClick={() => addNewTask()}>Nova Tarefa</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
