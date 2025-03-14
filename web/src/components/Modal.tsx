import * as Dialog from "@radix-ui/react-dialog"
import { ReactNode } from "react"

type TModalProps = {
  button: ReactNode
  children: ReactNode
  isModalOpen: boolean
  onModalOpen: (value: boolean) => void
}

export default function Modal({
  button,
  children,
  onModalOpen,
  isModalOpen,
}: TModalProps) {
  return (
    <Dialog.Root open={isModalOpen} onOpenChange={onModalOpen}>
      <Dialog.Trigger asChild>{button}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="h-screen w-screen bg-black/70 fixed top-0 left-0 z-[40]" />
        <Dialog.Content className="max-w-sm w-full fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[41] bg-background p-10 rounded-md">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
