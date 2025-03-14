import { Utils } from "@/lib/Utils"
import axios from "axios"

export const api = axios.create({
  baseURL: "https://localhost:4000",
})

api.interceptors.request.use(async (request) => {
  let user = Utils.GetLoginInformation()

  if (!user) {
    return request
  }

  request.headers.Authorization = `Bearer ${user.token}`

  return request
})
