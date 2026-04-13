import { auth } from "@/server/auth/auth";
import { db } from "@/server/db";
import Elysia, { Context, status } from "elysia";
import { userMiddleWare } from "../middleware/auth";
import { eq } from "drizzle-orm";
import { user } from "../../db/schema";

const betterAuthView = async (context: Context) => {
    const BETTER_AUTH_ACCEPT_METHODS = ["POST","GET"]
    if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)){
        return auth.handler(context.request)
    } else {
        return new Response("Method not allowed", {status: 405})
    }
}

export const userServise = new Elysia({
    name: "user/service"
})
.derive({ as: "global"}, async ({headers}) => await userMiddleWare(headers))
.macro({
    isSignedIn: (enabled? : boolean) => {
        if (!enabled) return;
        return {
            beforeHandle({ session}) {
                if (!session?.user) {
                    throw new Response(JSON.stringify({
                        message: "Вы должны войти в систему"
                    }), {status: 401})
                }
            }
        }
    }
})


export const userRouterPrefix = new Elysia({
})
.use(userServise)
.get("/me", async ({ session}) => {
    return db.query.user.findFirst({
        where: eq(user.id, session!.user.id)
    })
}, {
    isSignedIn: true,
})

export const userRouter = new Elysia().all("/auth/*", betterAuthView).use(userRouterPrefix)