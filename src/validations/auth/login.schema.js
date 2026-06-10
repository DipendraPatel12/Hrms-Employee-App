import { z } from 'zod';
import { emailValidation } from '../common/email'
export const loginSchema = z.object({
    email: emailValidation,
    password: z
        .string()
        .min(1, 'Password is required'),
});