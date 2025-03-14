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
  Task: TTasks
}

export type TTasks = {
  id: string
  name: string
  done: boolean
  created_at: string
}

export type TTaskCreate = {
  name: string
}

export type TTaskResponse = TErrorResponse & {
  id: string
  name: string
  done: boolean
  created_at: string
}
