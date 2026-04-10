import z from "zod/v4";

export const jointhecommunitySchema = z.object({
    heading: z.string().min(1, { message: "Название обязательно" }),
    text: z.string().min(1, { message: "Название обязательно" }),
})