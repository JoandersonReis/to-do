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

  public static addObjectInArrayPosition<T>(
    array: T[],
    position: number,
    item: T
  ): T[] {
    const start = array.slice(0, position + 1)
    const end = array.slice(position + 1, array.length)

    console.log(start)
    console.log(end)

    if (position >= array.length - 1) {
      return [...array, item]
    }

    return [...start, item, ...end]
  }
}
