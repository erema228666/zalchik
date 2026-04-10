import z from "zod/v4";

export const contactSchema = z.object({
    name: z.string().min(1, { message: "Название обязательно" }),
    contact: z.string().min(1,{ message: "Неверный URL" }),
})