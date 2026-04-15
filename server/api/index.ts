import Elysia from "elysia";
import { treaty } from "@elysiajs/eden";
import { socialLinksRouter } from "./routers/sociallinks";
import { headers as getHeaders } from "next/headers";
import { contactsRouter } from "./routers/contact";
import { forthecommitedRouter } from "./routers/forthecommited";
import { guidedbyexpertsRouter } from "./routers/guidedbyexperts";
import { userRouter } from "./routers/user";
import { dynamicopengymRouter } from "./routers/dynamicopengym";
import { aboutusdynamicRouter } from "./routers/aboutusdynamic";
import { aboutustapintoRouter } from "./routers/aboutustapinto";
import { openinghoursRouter } from "./routers/openhours";

export const app = new Elysia({
    name: 'app',
    prefix: '/api'
})
.use(socialLinksRouter)
.use(contactsRouter)
.use(forthecommitedRouter)
.use(guidedbyexpertsRouter)
.use(dynamicopengymRouter)
.use(aboutusdynamicRouter)
.use(aboutustapintoRouter)
.use(userRouter)
.use(openinghoursRouter)

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

