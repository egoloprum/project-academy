import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.string().min(1, 'Обязательное поле').email('Некорректный email'),
    password: z
      .string()
      .min(1, 'Обязательное поле')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
    confirmPassword: z.string().min(1, 'Обязательное поле')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  })
