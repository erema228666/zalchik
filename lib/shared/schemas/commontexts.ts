import z from "zod/v4";

export const forthecommitedSchema = z.object({
    text: z.string().min(1, { message: "Это поле не может быть пустым"})
})

export const guidedbyexpertsSchema = z.object({
    text: z.string().min(1, { message: "Это поле не может быть пустым"})
})

export const dynamicopengymSchema = z.object({
    text: z.string().min(1, { message: "Это поле не может быть пустым"})
})