import { Direction } from '../direction'
import { Generation } from '../generation'
import { Status } from '../status'

// export interface User {
//   id: string
//   role: 'admin' | 'mentor' | 'intern' | 'applicant'

//   firstName: string
//   secondName: string
//   lastName: string

//   city: string
//   birthday: string
//   email: string
//   telephone: string
// }

export type UserRatingType = {
  userName: string
  result: string
  review: string
  status: Status
  generation: Generation
  direction: Direction
}
