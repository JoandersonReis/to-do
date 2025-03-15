import * as Popover from "@radix-ui/react-popover"
import { CheckCircle, OctagonX } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "./Button"

type TAction = ComponentProps<"button"> & {
  onConfirm: VoidFunction
}

export default function Action({ className, onConfirm, ...props }: TAction) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          {...props}
          className={twMerge("h-6 w-6 px-0 bg-primary", className)}
        />
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className="bg-secondary p-4 rounded-md border border-white/10 flex flex-col gap-2">
          <h2>Deseja excluir?</h2>

          <Button onClick={onConfirm} className="h-8 text-sm px-0 w-[120px]">
            <CheckCircle size={14} /> Confirmar
          </Button>
          <Popover.Close className="bg-red-500 flex items-center justify-center gap-2 rounded-md w-[120px] h-8 cursor-pointer">
            <OctagonX size={14} /> Cancelar
          </Popover.Close>

          <Popover.Arrow width={20} height={10} className="fill-secondary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
