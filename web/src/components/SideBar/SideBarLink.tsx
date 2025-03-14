import Link from "next/link"
import { AnchorHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type TSideBarLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export default function SideBarLink({ className, ...props }: TSideBarLink) {
  return (
    <Link
      {...props}
      className={twMerge(
        "uppercase h-10 flex items-center justify-center px-4 bg-background opacity-70 hover:opacity-100 transition-all rounded-md",
        className
      )}
    />
  )
}
