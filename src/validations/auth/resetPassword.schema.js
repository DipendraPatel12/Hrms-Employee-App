import { z } from "zod";

export const resetPasswordSchema = z
    .object({
        new_password: z.string().min(8, "Password must be at least 8 characters long"),

        confirm_password: z.string(),
    })
    .refine(
        data =>
            data.new_password ===
            data.confirm_password,
        {
            message: "Passwords do not match",
            path: ["confirm_password"],
        }
    );