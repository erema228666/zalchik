import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";
import { success } from "zod";
import { ForTheCommited } from "@/server/db/schema";
import z from "zod/v4";
import { forthecommitedSchema } from "@/lib/shared/schemas/commontexts";


export const forthecommitedRouter = new Elysia({ prefix: "/forthecommited"})
    .get('/', async() => {
        const forthecommited = await db.query.ForTheCommited.findMany();
        return { success: true, data: forthecommited }
    })
    .post('/', async({ body }) => {
        const newForthecommited = await db.insert(ForTheCommited).values(body).returning();
        return { success: true, data: newForthecommited };
    }, {
        body: forthecommitedSchema,
    })
    .delete("/:id", async ({ params }) => {
        await db.delete(ForTheCommited).where(eq(ForTheCommited.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
    })