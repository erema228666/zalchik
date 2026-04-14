import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
export * from './auth-schema';

const commonFields = {
    id: varchar("id", { length: 255 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdAt: timestamp("created_at").defaultNow(),
    deletedAt: timestamp("deleted_at"),
}

export const ForTheCommited = pgTable('ForTheCommited', {
    ...commonFields,
  text: text('text').notNull(),
});
export const GuidedByExperts = pgTable('GuidedByExperts', {
    ...commonFields,
  text: text('text').notNull(),
});
export const DynamicOpenGym = pgTable('DynamicOpenGym', {
    ...commonFields,
  text: text('text').notNull(),
});


export const AboutUsTapInto = pgTable('AboutUsTapInto', {
  ...commonFields,
  text: text('text').notNull(),
}) 
export const AboutUsDynamic = pgTable('AboutUsDynamic', {
  ...commonFields,
  text: text('text').notNull(),
})

export const JoinTheCommunity = pgTable('JoinTheCommunity', {
    ...commonFields,
  heading: varchar('heading', { length: 50 }).notNull(),
  text: text('text').notNull(),
});

export const SocialLinks = pgTable('SocialLinks', {
  ...commonFields,
  name: varchar('name', { length: 50 }).notNull(),
  link: text('url').notNull(),
});

export const OpeningHours = pgTable('OpeningHours', {
    ...commonFields,
  day: varchar('day', { length: 50 }).notNull(),
  open: integer('open').notNull(),
  close: integer('close').notNull(),
});

export const contact = pgTable('contact', {
    ...commonFields,
  name: varchar('name', { length: 50 }).notNull(),
  contact: text('text').notNull(),
});
