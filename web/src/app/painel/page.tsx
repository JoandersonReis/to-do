import NewDocumentModal from "@/components/NewDocumentModal"

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">Bem vindo ao To-do</h1>
        <p className="text-center opacity-70 max-w-[600px]">
          Aqui, você pode adicionar, organizar e gerenciar suas tarefas de
          maneira simples e intuitiva. Seja para compromissos diários, prazos de
          trabalho ou metas pessoais, nossa plataforma está pronta para ajudar
          você a se manter no controle e alcançar seus objetivos. Explore as
          funcionalidades, crie suas listas e comece a transformar sua rotina
          com um clique. Estamos aqui para ajudar você a ser mais produtivo,
          organizado e focado no que realmente importa.
        </p>

        <NewDocumentModal />
      </div>
    </div>
  )
}
