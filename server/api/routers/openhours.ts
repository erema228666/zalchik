import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";
import { OpeningHours } from "@/server/db/schema";
import z from "zod/v4";
import { openhoursschema } from "@/lib/shared/schemas/openhours";


export const openinghoursRouter = new Elysia({ prefix: "/openinghours"})
    .get('/', async() => {
        const hours = await db.query.OpeningHours.findMany();
        return { hours }
    })
    .put(
            "/:id",
            async ({ params, body }) => {
            return await db.update(OpeningHours).set(body).where(eq(OpeningHours.id, params.id));
            },
            {
            params: z.object({
                id: z.string(),
            }),
            body: openhoursschema,
            },
        )
    .post('/', async({ body }) => {
        const newContact = await db.insert(OpeningHours).values(body).returning();
        return { newContact };
    }, {
        body: openhoursschema,
    })
    .delete("/:id", async ({ params }) => {
        await db.delete(OpeningHours).where(eq(OpeningHours.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
    })