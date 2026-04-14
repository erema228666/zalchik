import { Elysia } from 'elysia';
import { eq } from 'drizzle-orm';
import { db } from '@/server/db';
import { success } from 'zod';
import { ForTheCommited } from '@/server/db/schema';
import z from 'zod/v4';
import { forthecommitedSchema } from '@/lib/shared/schemas/commontexts';

export const forthecommitedRouter = new Elysia({ prefix: '/forthecommited' })
  .get('/', async () => {
    const forthecommited = await db.query.ForTheCommited.findMany();
    return { forthecommited };
  })
  .put(
    '/:id',
    async ({ params, body }) => {
      return await db
        .update(ForTheCommited)
        .set(body)
        .where(eq(ForTheCommited.id, params.id));
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: forthecommitedSchema,
    },
  )
  .post(
    '/',
    async ({ body }) => {
      const newForthecommited = await db
        .insert(ForTheCommited)
        .values(body)
        .returning();
      return { newForthecommited };
    },
    {
      body: forthecommitedSchema,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(ForTheCommited).where(eq(ForTheCommited.id, params.id));
      return { success: true };
    },
    {
      params: z.object({ id: z.string() }),
    },
  );
