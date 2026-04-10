import z from "zod/v4";

export const socialSchema = z.object({
    name: z.string().min(1, { message: "Название обязательно" }),
    link: z.url().min(1,{ message: "Неверный URL" }),
})