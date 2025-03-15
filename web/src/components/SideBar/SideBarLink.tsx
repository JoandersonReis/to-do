import Link from "next/link"
import { AnchorHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export default function SideBarLink({ className, ...props }: TSideBarLink) {
  return <Link {...props} className={twMerge("uppercase flex-1", className)} />
}
