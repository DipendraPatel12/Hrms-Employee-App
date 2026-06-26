import { z } from 'zod';

export const dependentSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  gender: z.string().min(1, 'Gender is required'),
  contactNo: z.string()
    .min(1, 'Contact number is required')
    .regex(/^\+?[0-9]{8,15}$/, 'Invalid contact number format'),
});
