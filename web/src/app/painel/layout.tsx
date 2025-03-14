import ExitAccount from "@/components/ExitAccount"
import Menu from "@/components/Menu"
import { DocumentProvider } from "@/contexts/DocumentProvider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex">
      <DocumentProvider>
        <>
          <Menu />

          <main className="flex-1 overflow-y-scroll p-12 h-screen relative">
            <ExitAccount className="absolute top-4 right-4" />
            {children}
          </main>
        </>
      </DocumentProvider>
    </div>
  )
}
