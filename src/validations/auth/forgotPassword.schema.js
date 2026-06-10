import { z } from 'zod';
import { emailValidation } from '../common/email';

export const forgotPasswordSchema = z.object({
    email: emailValidation
});