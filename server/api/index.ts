import Elysia from "elysia";
import { treaty } from "@elysiajs/eden";
import { socialLinksRouter } from "./routers/sociallinks";
import { headers as getHeaders } from "next/headers";
import { contactsRouter } from "./routers/contact";
import { forthecommitedRouter } from "./routers/forthecommited";

export const app = new Elysia({
    name: 'app',
    prefix: '/api'
})
.use(socialLinksRouter)
.use(contactsRouter)
.use(forthecommitedRouter)

export type App = typeof app;
export const api = treaty(app).api

export async function headers(): Promise<Record<string, string | undefined>> {
    const h = await getHeaders()
    const headers: Record<string, string | undefined> = {}
    for (const [key, value] of h.entries()) {
        headers[key] = value    
    }
    return headers;

}

