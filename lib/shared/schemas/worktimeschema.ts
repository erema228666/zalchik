import z from "zod/v4";

export const worktimeSchema = z.object({
    day: z.string().min(1, { message: "Это поле не может быть пустым" }),
    open: z.string().min(1, { message: "Это поле не может быть пустым" }),
    close: z.string().min(1, { message: "Это поле не может быть пустым" }),
})