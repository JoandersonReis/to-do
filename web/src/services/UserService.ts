import { Utils } from "@/lib/Utils"
import { api } from "./api"
import { TUserLoginResponse } from "./types"

export class UserService {
  async login(username: string) {
    const { data } = await api.post<TUserLoginResponse>("/users/login", {
      username,
    })

    if (data.status) {
      alert(data.description)
    }

    if (data.token) {
      Utils.StorageLoginInformation({ token: data.token })
    }

    return data
  }
}
