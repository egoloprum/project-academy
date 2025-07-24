import z from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Обязательное поле')
    .email('Некорректная электронная почта'),
  password: z.string().min(1, 'Обязательное поле'),
  rememberMe: z.boolean().optional()
})
