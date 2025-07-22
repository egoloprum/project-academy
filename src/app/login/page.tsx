import { BackToMainBtn } from '@/features/backToMainBtn'
import { PageWrapper } from '@/widgets/pageWrapper'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <PageWrapper>
      <div className="bg-(--black-main) min-h-[100vh] h-full">
        <BackToMainBtn />
      </div>
    </PageWrapper>
  )
}

export default page
