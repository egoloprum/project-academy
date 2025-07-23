'use client'

import { LogoDzen, LogoFooter, LogoMail, LogoTelegram, LogoVk } from '@/shared'
import { Button } from '@/shared/ui'

export const Footer = ({}) => {
  return (
    <footer className="2xl:px-[156px] xl:px-[120px] lg:px-[74px] px-[24px] sm:px-[32px] md:px-[48px] md:py-[80px] py-[40px] flex flex-col gap-[24px] lg:flex-row lg:gap-[40px] justify-between bg-(--white-100)">
      <section className="flex flex-col gap-[24px]">
        <LogoFooter />
        <div className="text-(--white-main) flex flex-col gap-[16px]">
          <p>© 2024 Академия Абдрашитова</p>
          <p>ООО &quot;Рэд Кэт&quot;</p>
          <p>ИНН 7000010643</p>
        </div>
      </section>
      <section className="text-(--white-main) flex flex-col gap-[16px]">
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px] !p-0 !h-fit text-nowrap">
          <LogoMail />
          <span>По всем вопросам</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px] !p-0 !h-fit text-nowrap">
          <LogoVk />
          <span>Сообщество во ВКонтакте</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px] !p-0 !h-fit text-nowrap">
          <LogoTelegram />
          <span>Канал в Telegram</span>
        </Button>
        <Button
          btnType="clear"
          href="#"
          className="flex items-start justify-start gap-[4px] !p-0 !h-fit text-nowrap">
          <LogoDzen />
          <span>Мы на Дзене</span>
        </Button>
      </section>
      <section className="text-(--white-main)">
        <Button
          btnType="clear"
          href="#"
          className="!p-0 !h-fit text-wrap justify-start">
          <span>Политика обработки персональных данных</span>
        </Button>
      </section>
    </footer>
  )
}
