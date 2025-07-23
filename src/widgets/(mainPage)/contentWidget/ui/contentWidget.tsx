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
    <div className="mx-[156px] text-(--white-main) flex justify-between gap-[160px]">
      <div className="w-full">
        <Main1 />
      </div>
      <div className="flex flex-col gap-[32px] max-w-[520px] w-full">
        <p className="text-[36px] font-bold">Направления</p>
        <div className="flex flex-col gap-[16px] text-nowrap">
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px] w-full">
              <BackendLogo />
              <span className="px-[8px]">Backend</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px] w-full">
              <FrontendLogo />
              <span className="px-[8px]">Frontend</span>
            </Button>
          </div>
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px] w-[80%]">
              <SystemAnalystLogo />
              <span className="px-[8px]">System Analyst</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px] w-full px-[40px]">
              <ProjectManagerLogo />
              <span className="px-[8px]">Project Manager</span>
            </Button>
          </div>
          <div className="flex gap-[16px]">
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px]">
              <CEOLogo />
              <span className="px-[8px]">CEO</span>
            </Button>
            <Button
              btnType="gray"
              className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px] w-full">
              <QAEngineerLogo />
              <span className="px-[8px]">QA Engineer</span>
            </Button>
          </div>
          <Button
            btnType="gray"
            className="gap-[4px] wrap-none 2xl:h-[56px] text-[18px]">
            <DesignerLogo />
            <span className="px-[8px]">UI/UX Designer</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
