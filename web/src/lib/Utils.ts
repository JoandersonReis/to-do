import { TUserLoginResponse } from "@/services/types"

export class Utils {
  public static StorageLoginInformation(data: TUserLoginResponse) {
    const dataConverted = JSON.stringify(data)

    localStorage.setItem("@tradesee-todo:user", dataConverted)
  }

  public static GetLoginInformation(): TUserLoginResponse | null {
    const user = localStorage.getItem("@tradesee-todo:user")

    return JSON.parse(String(user))
  }
}
