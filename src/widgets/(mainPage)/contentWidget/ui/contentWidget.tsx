import {
  BackendLogo,
  CEOLogo,
  DesignerLogo,
  FrontendLogo,
  Main1,
  ProjectManagerLogo,
  QAEngineerLogo,
  SystemAnalystLogo
} from '@/shared'
import { Button } from '@/shared/ui'

export const ContentWidget = ({}) => {
  return (
    <div className="2xl:mx-[156px] xl:mx-[120px] lg:mx-[74px] mx-[24px] sm:mx-[32px] md:mx-[48px] text-(--white-main) flex flex-col-reverse xl:flex-row justify-between gap-[40px]">
      <div className="w-full flex justify-center items-end overflow-hidden">
        <Main1 className="lg:block w-full h-full 2xl:max-w-[954px]" />
      </div>
      <div className="flex flex-col gap-[32px] 2xl:max-w-[520px] w-full">
        <p className="text-[36px] font-bold">Направления</p>
        <div className="flex flex-col gap-[16px] text-nowrap">
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px]">
              <BackendLogo />
              <span className="px-[8px]">Backend</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px]">
              <FrontendLogo />
              <span className="px-[8px]">Frontend</span>
            </Button>
          </div>
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px] xl:w-[80%]">
              <SystemAnalystLogo />
              <span className="px-[8px]">System Analyst</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px]">
              <ProjectManagerLogo />
              <span className="px-[8px]">Project Manager</span>
            </Button>
          </div>
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px] xl:w-fit">
              <CEOLogo />
              <span className="px-[8px]">CEO</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px]">
              <QAEngineerLogo />
              <span className="px-[8px]">QA Engineer</span>
            </Button>
          </div>
          <Button
            btnType="gray"
            className="gap-[4px] wrap-none 2xl:h-[56px] text-[14px] md:text-[18px] w-full h-[40px]">
            <DesignerLogo />
            <span className="px-[8px]">UI/UX Designer</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
