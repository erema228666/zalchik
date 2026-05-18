import { Treaty } from "@elysiajs/eden";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { t } from "elysia";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const IdSchema = t.Object({
  id: t.String({
    minLength: 1,
  }),
});

type TreatyFunction = (...args: any) => Promise<Treaty.TreatyResponse<unknown>>;

export type InferTreatyReturnType<T extends TreatyFunction> = NonNullable<
  Awaited<ReturnType<T>>["data"]
>;

export type InferTreatyInputType<T extends TreatyFunction> = NonNullable<
  Parameters<T>[0]
>;