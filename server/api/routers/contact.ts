import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";
import { success } from "zod";
import { contact } from "@/server/db/schema";
import z from "zod/v4";
import { contactSchema } from "@/lib/shared/schemas/contactschema";


export const contactsRouter = new Elysia({ prefix: "/contact"})
    .get('/', async() => {
        const contacts = await db.query.contact.findMany();
        return { contacts }
    })
    .put(
            "/:id",
            async ({ params, body }) => {
            return await db.update(contact).set(body).where(eq(contact.id, params.id));
            },
            {
            params: z.object({
                id: z.string(),
            }),
            body: contactSchema,
            },
        )
    .post('/', async({ body }) => {
        const newContact = await db.insert(contact).values(body).returning();
        return { newContact };
    }, {
        body: contactSchema,
    })
    .delete("/:id", async ({ params }) => {
        await db.delete(contact).where(eq(contact.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
    })