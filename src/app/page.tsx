import { AboutWidget } from '@/widgets/(mainPage)/aboutWidget'
import { ContentWidget } from '@/widgets/(mainPage)/contentWidget'
import { StageWidget } from '@/widgets/(mainPage)/stageWidget'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { PageWrapper } from '@/widgets/pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-(--black-main) min-h-[100vh] h-full flex flex-col gap-[120px]">
        <Header />

        <ContentWidget />
        <AboutWidget />
        <StageWidget />

        <Footer />
      </main>
    </PageWrapper>
  )
}
