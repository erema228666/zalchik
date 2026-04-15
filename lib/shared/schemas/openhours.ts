import z from "zod/v4";

export const openhoursschema = z.object({
    day: z.string().min(1, "day is required"),
    open: z.number().min(1, "open time is required"),
    close: z.number().min(1, "close time is required"),

})