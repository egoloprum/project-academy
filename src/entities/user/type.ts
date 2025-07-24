export interface User {
  id: string
  role: 'intern' | 'mentor' | 'admin'
  email: string
  password: string
  firstName?: string
  middleName?: string
  lastName?: string
  birthday?: string
  telephone?: string
  city?: string
}
