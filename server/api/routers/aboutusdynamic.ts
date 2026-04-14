import { Elysia } from 'elysia';
import { eq } from 'drizzle-orm';
import { db } from '@/server/db';
import { success } from 'zod';
import z from 'zod/v4';
import { aboutusdynamicSchema } from '@/lib/shared/schemas/commontexts';
import { AboutUsDynamic } from '@/server/db/schema';

export const aboutusdynamicRouter = new Elysia({ prefix: '/aboutusdynamic' })
  .get('/', async () => {
    const aboutusdynamic = await db.query.AboutUsDynamic.findMany();
    return { aboutusdynamic };
  })
  .put(
    '/:id',
    async ({ params, body }) => {
      return await db
        .update(AboutUsDynamic)
        .set(body)
        .where(eq(AboutUsDynamic.id, params.id));
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: aboutusdynamicSchema,
    },
  )
  .post(
    '/',
    async ({ body }) => {
      const newAboutusdynamic = await db
        .insert(AboutUsDynamic)
        .values(body)
        .returning();
      return { newAboutusdynamic };
    },
    {
      body: aboutusdynamicSchema,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(AboutUsDynamic).where(eq(AboutUsDynamic.id, params.id));
      return { success: true };
    },
    {
      params: z.object({ id: z.string() }),
    },
  );
