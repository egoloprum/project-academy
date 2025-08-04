import {
  RatingFinalTable,
  RatingFinalToSelectBtn,
  RatingSelectTable,
  RatingSelectToFinalBtn,
  TableProvider
} from '@/features/(rating)'

export const RatingAdminContent = ({}) => {
  return (
    <TableProvider>
      <div className="flex flex-col lg:flex-row lg:h-80 gap-8">
        <RatingSelectTable />
        <div className="flex justify-center items-center flex-row lg:flex-col gap-4">
          <RatingSelectToFinalBtn />
          <RatingFinalToSelectBtn />
        </div>
        <RatingFinalTable />
      </div>
    </TableProvider>
  )
}
