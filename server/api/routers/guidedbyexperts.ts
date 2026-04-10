import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";
import { success } from "zod";
import { GuidedByExperts } from "@/server/db/schema";
import z from "zod/v4";
import { guidedbyexpertsSchema } from "@/lib/shared/schemas/commontexts";


export const guidedbyexpertsRouter = new Elysia({ prefix: "/guidedbyexperts"})
    .get('/', async() => {
        const guidedbyexperts = await db.query.GuidedByExperts.findMany();
        return { guidedbyexperts }
    })
    .put(
        "/:id",
        async ({ params, body }) => {
        return await db.update(GuidedByExperts).set(body).where(eq(GuidedByExperts.id, params.id));
        },
        {
        params: z.object({
            id: z.string(),
        }),
        body: guidedbyexpertsSchema,
        },
    )
    .post('/', async({ body }) => {
        const newguidedbyexperts = await db.insert(GuidedByExperts).values(body).returning();
        return { newguidedbyexperts };
    }, {
        body: guidedbyexpertsSchema,
    })
    .delete("/:id", async ({ params }) => {
        await db.delete(GuidedByExperts).where(eq(GuidedByExperts.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
    })