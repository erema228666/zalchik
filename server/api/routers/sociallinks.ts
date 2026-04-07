import { Elysia } from "elysia";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";
import { success } from "zod";
import { SocialLinks } from "@/server/db/schema";
import z from "zod/v4";
import { socialSchema } from "@/lib/shared/schemas/edittext";


export const socialLinksRouter = new Elysia({ prefix: "/social"})
    .get('/', async() => {
        const socialLinks = await db.query.SocialLinks.findMany();
        return { success: true, data: socialLinks }
    })
    .post('/', async({ body }) => {
        const newSocial = await db.insert(SocialLinks).values(body).returning();
        return { success: true, data: newSocial };
    }, {
        body: socialSchema,
        // hasRole: 'admin'
    })
    .delete("/:id", async ({ params }) => {
        await db.delete(SocialLinks).where(eq(SocialLinks.id, params.id));
        return { success: true };
    }, {
        params: z.object({ id: z.string() }),
        // hasRole: "admin"
    })