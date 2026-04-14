import { Elysia } from 'elysia';
import { eq } from 'drizzle-orm';
import { db } from '@/server/db';
import { success } from 'zod';
import z from 'zod/v4';
import { aboutustapintoSchema } from '@/lib/shared/schemas/commontexts';
import { AboutUsTapInto } from '@/server/db/schema';

export const aboutustapintoRouter = new Elysia({ prefix: '/aboutustapinto' })
  .get('/', async () => {
    const aboutustapinto = await db.query.AboutUsTapInto.findMany();
    return { aboutustapinto };
  })
  .put(
    '/:id',
    async ({ params, body }) => {
      return await db
        .update(AboutUsTapInto)
        .set(body)
        .where(eq(AboutUsTapInto.id, params.id));
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: aboutustapintoSchema,
    },
  )
  .post(
    '/',
    async ({ body }) => {
      const newAboutustapinto = await db
        .insert(AboutUsTapInto)
        .values(body)
        .returning();
      return { newAboutustapinto };
    },
    {
      body: aboutustapintoSchema,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(AboutUsTapInto).where(eq(AboutUsTapInto.id, params.id));
      return { success: true };
    },
    {
      params: z.object({ id: z.string() }),
    },
  );
