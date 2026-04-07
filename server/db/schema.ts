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
  text: text('text').notNull(),
});
export const GuidedByExperts = pgTable('GuidedByExperts', {
  text: text('text').notNull(),
});
export const DynamicOpenGym = pgTable('DynamicOpenGym', {
  text: text('text').notNull(),
});

export const JoinTheCommunity = pgTable('JoinTheCommunity', {
  heading: varchar('heading', { length: 50 }).notNull(),
  text: text('text').notNull(),
});

export const SocialLinks = pgTable('SocialLinks', {
  ...commonFields,
  name: varchar('name', { length: 50 }).notNull(),
  link: text('url').notNull(),
});

export const OpeningHours = pgTable('OpeningHours', {
  day: varchar('day', { length: 50 }).notNull(),
  open: integer('open').notNull(),
  close: integer('close').notNull(),
});

export const contact = pgTable('contact', {
  name: varchar('name', { length: 50 }).notNull(),
  contact: text('text').notNull(),
});
