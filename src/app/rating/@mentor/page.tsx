import {
  RatingDirectionSelect,
  RatingGenerationSelect,
  RatingSearchInput,
  RatingSortSelect
} from '@/features/(rating)'
import { RatingMentorProvider } from '@/features/(rating)'
import { RatingMentorTable } from '@/widgets/(rating)'

const page = ({}) => {
  return (
    <RatingMentorProvider>
      <p className="text-2xl font-bold">Рейтинг кандидатов</p>
      <section className="flex flex-col gap-8 lg:gap-4">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 justify-end gap-4">
          <RatingGenerationSelect />
          <RatingDirectionSelect />
          <RatingSortSelect />
          <RatingSearchInput />
        </div>
        <RatingMentorTable />
      </section>
    </RatingMentorProvider>
  )
}

export default page
