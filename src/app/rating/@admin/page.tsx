import {
  RatingDirectionSelect,
  RatingGenerationSelect
} from '@/features/(rating)'
import { RatingAdminContent } from '@/widgets/(rating)'

const page = ({}) => {
  return (
    <>
      <p className="text-2xl font-bold">Финальные списки</p>
      <div className="flex flex-col gap-8 sm:gap-4">
        <section className="flex flex-col sm:flex-row gap-4 lg:gap-4">
          <RatingGenerationSelect />
          <RatingDirectionSelect />
        </section>
        <RatingAdminContent />
      </div>
    </>
  )
}

export default page
