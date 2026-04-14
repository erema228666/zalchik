import { Elysia } from 'elysia';
import { eq } from 'drizzle-orm';
import { db } from '@/server/db';
import { success } from 'zod';
import z from 'zod/v4';
import { dynamicopengymSchema } from '@/lib/shared/schemas/commontexts';
import { DynamicOpenGym } from '@/server/db/schema';

export const dynamicopengymRouter = new Elysia({ prefix: '/dynamicopengym' })
  .get('/', async () => {
    const dynamicopengym = await db.query.DynamicOpenGym.findMany();
    return { dynamicopengym };
  })
  .put(
    '/:id',
    async ({ params, body }) => {
      return await db
        .update(DynamicOpenGym)
        .set(body)
        .where(eq(DynamicOpenGym.id, params.id));
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: dynamicopengymSchema,
    },
  )
  .post(
    '/',
    async ({ body }) => {
      const newDynamicopengym = await db
        .insert(DynamicOpenGym)
        .values(body)
        .returning();
      return { newDynamicopengym };
    },
    {
      body: dynamicopengymSchema,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(DynamicOpenGym).where(eq(DynamicOpenGym.id, params.id));
      return { success: true };
    },
    {
      params: z.object({ id: z.string() }),
    },
  );
