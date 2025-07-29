import { SendApplicationBtn } from '@/features/sendApplicationBtn'
import { AboutWidget } from '@/widgets/(mainPage)/aboutWidget'
import { DirectionsWidget } from '@/widgets/(mainPage)/directionsWidget'
import { StagesWidget } from '@/widgets/(mainPage)/stagesWidget'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { PageWrapper } from '@/widgets/pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-black">
        <Header />
        <HeroSection />
        <DirectionsWidget />
        <AboutWidget />
        <StagesWidget />
        <Footer />
      </main>
    </PageWrapper>
  )
}

const HeroSection = () => {
  return (
    <div className="mx-6 sm:mx-12 md:mx-24 py-10 sm:my-15 md:my-20 flex flex-col gap-5 md:gap-10">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
        <span>Стань IT-специалистом с </span>
        <span className="text-lime-300">Академией Абдрашитова</span>
      </h1>
      <p className="text-base md:text-xl text-gray-400 text-center">
        Получи опыт работы в настоящих проектах под руководством опытных
        наставников
      </p>
      <SendApplicationBtn />
    </div>
  )
}
