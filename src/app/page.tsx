import { Button } from '@/shared/ui'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export default function Home() {
  return (
    <main className="bg-(--black-main) min-h-[100vh] flex flex-col gap-[120px]">
      <Header />
      <Footer />
    </main>
  )
}
