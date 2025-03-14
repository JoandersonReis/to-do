import { api } from "./api"
import { TTaskCreate, TTaskResponse } from "./types"

export class DocumentService {
  async create(taskData: TTaskCreate): Promise<TTaskResponse | null> {
    const { data } = await api.post("/tasks", taskData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  async update(taskData: TTaskCreate): Promise<TTaskResponse | null> {
    const { data } = await api.put("/tasks", taskData)

    if (data.status) {
      alert(data.description)

      return null
    }

    return data
  }

  async delete(task_id: string): Promise<TTaskResponse | null> {
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
