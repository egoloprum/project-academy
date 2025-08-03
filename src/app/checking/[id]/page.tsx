import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import {
  CheckingForm,
  CheckingGoBackBtn,
  CheckingProcessSelect
} from '@/features/(checking)'
import { isUserType } from '@/shared/lib'

const page = async ({}) => {
  const cookieStore = await cookies()
  const auth = cookieStore.get('authUser')

  const userType = auth && isUserType(auth.value) ? auth.value : undefined

  if (!userType) {
    redirect('/login')
  }

  if (userType === 'admin' || userType === 'intern') {
    redirect('/profile')
  }

  return (
    <main className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-10 flex flex-col gap-4">
      <CheckingGoBackBtn />
      <p className="text-2xl font-bold">System Analyst / Поток 3</p>
      <section className="flex flex-wrap justify-between gap-8 mt-4 sm:mt-8">
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-4 gap-x-16">
          <div className="">
            <p className="font-medium text-lg mb-2 text-nowrap">
              Иванов Иван Иванович
            </p>
            <p className="text-gray-400">
              <span>Дата загрузки тестового:</span>
              <span className="ml-2">01.01.2025</span>
            </p>
          </div>
          <div className="">
            <p className="font-medium text-lg mb-2 text-nowrap">
              Выполненное задание
            </p>
            <div className="flex flex-wrap xl:flex-nowrap gap-x-8">
              <p className="truncate max-w-64 lg:max-w-96 text-gray-400">
                <span>Ссылка:</span>
                <span className="ml-2 underline underline-offset-2 cursor-pointer">
                  https://docs.google.com/document/d/SREGNJHSndsjhe3patFJ5CsLVLtoBn7_at_8/edit?usp=drive_lуауоаооуа
                </span>
              </p>
              <p className="truncate max-w-64 lg:max-w-96 text-gray-400">
                <span>Файл:</span>
                <span className="ml-2 text-lime-300 cursor-pointer">
                  Тестовое_Иванов.doc
                </span>
              </p>
            </div>
          </div>
        </div>
        <CheckingProcessSelect />
      </section>
      <CheckingForm />
    </main>
  )
}

export default page
