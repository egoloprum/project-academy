import { ExternalLink, Link2, Mail, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = ({}) => {
  return (
    <footer className="px-6 sm:px-12 md:px-24 py-10 sm:py-15 md:py-20 grid md:grid-cols-3 gap-4 border-t border-stone-900">
      <div className="flex flex-col gap-4">
        <p className="text-lime-300 flex gap-2 items-center">
          <Image src={'/logo.svg'} width={32} height={32} alt="logo" />
          <span className="text-xl font-bold">Академия Абдрашитова</span>
        </p>
        <p className="flex flex-col gap-2 text-gray-400">
          <span>© 2024 Академия Абдрашитова</span>
          <span>ООО &quot;Рэд Кэт&quot;</span>
          <span>ИНН 7000010643</span>
        </p>
      </div>
      <div className="text-gray-400 flex flex-col gap-4">
        <Link href="" className="flex gap-2 items-center">
          <Mail />
          <span>По всем вопросам</span>
        </Link>
        <Link href="" className="flex gap-2 items-center">
          <ExternalLink />
          <span>Сообщество во ВКонтакте</span>
        </Link>
        <Link href="" className="flex gap-2 items-center">
          <Send />
          <span>Канал в Telegram</span>
        </Link>
        <Link href="" className="flex gap-2 items-center">
          <Link2 />
          <span>Мы на Дзене</span>
        </Link>
      </div>
      <div className="text-gray-400">
        <Link href="">Политика обработки персональных данных</Link>
      </div>
    </footer>
  )
}
