import NewDocumentModal from "@/components/NewDocumentModal"

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">Bem vindo ao TradeSee Todo</h1>
        <p className="text-center opacity-70 max-w-[600px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          tempore neque, iusto, iste nesciunt autem quae maxime deleniti id
          adipisci saepe vel, rerum dolorum ducimus explicabo commodi aspernatur
          aut voluptatibus.
        </p>

        <NewDocumentModal />
      </div>
    </div>
  )
}
