'use client'

import { LogoDzen, LogoFooter, LogoMail, LogoTelegram, LogoVk } from '@/shared'
import { Button } from '@/shared/ui'

export const Footer = ({}) => {
  return (
    <footer className="px-[156px] py-[80px] flex justify-between bg-(--white-100)">
      <section className="flex flex-col gap-[24px]">
        <LogoFooter />
        <div className="text-(--white-main) flex flex-col gap-[16px]">
          <p>© 2024 Академия Абдрашитова</p>
          <p>ООО &quotРэд Кэт&quot</p>
          <p>ИНН 7000010643</p>
        </div>
      </section>
      <section className="text-(--white-main) flex flex-col gap-[8px]">
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px]">
          <LogoMail />
          <span>По всем вопросам</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px]">
          <LogoVk />
          <span>Сообщество во ВКонтакте</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px]">
          <LogoTelegram />
          <span>Канал в Telegram</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px]">
          <LogoDzen />
          <span>Мы на Дзене</span>
        </Button>
      </section>
      <section className="text-(--white-main) flex flex-col gap-[8px]">
        <Button btnType="clear" href="#">
          <span>Политика обработки персональных данных</span>
        </Button>
      </section>
    </footer>
  )
}
