import { BackToMainBtn } from '@/features/backToMainBtn'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-(--black-main) min-h-[100vh]">
      <BackToMainBtn />
    </div>
  )
}

export default page
