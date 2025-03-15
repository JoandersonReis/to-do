import { api } from "./api"
import { TTaskCreate, TTaskResponse } from "./types"

export class TaskService {
  static async create(taskData: TTaskCreate): Promise<TTaskResponse | null> {
    const { data, status } = await api.post("/tasks", taskData)

    if (data.status && status > 200) {
      alert(data.description)

      return null
    }

    return data
  }

  static async update(
    taskData: TTaskCreate,
    id: string
  ): Promise<TTaskResponse | null> {
    const { data } = await api.put(`/tasks/${id}`, taskData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  static async delete(task_id: string): Promise<TTaskResponse | null> {
    const { data } = await api.delete<TTaskResponse>("/tasks", {
      params: {
        id: task_id,
      },
    })

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }
}
