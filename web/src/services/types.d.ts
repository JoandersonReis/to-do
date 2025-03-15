export type TErrorResponse = {
  description?: string
  status?: number
  errors?: object
}

export type TUserLoginResponse = TErrorResponse & {
  token: string
}

export type TDocumentCreate = {
  title: string
}

export type TDocumentResponse = TErrorResponse & {
  id: string
  title: string
  created_at: string
}

export type TDocumentWithTasks = TDocumentResponse & {
  Task: TTask[]
}

export type TTask = {
  id: string
  name: string
  done: boolean
  created_at: string
}

export type TTaskCreate = {
  name: string
  document_id: string
  position: number
}

export type TTaskResponse = TErrorResponse & {
  id: string
  name: string
  done: boolean
  created_at: string
}
