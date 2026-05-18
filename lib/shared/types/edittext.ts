import { InferTreatyReturnType } from "@/lib/utils";
import { api } from "@/server/api";

export type EditText = InferTreatyReturnType<typeof api.forthecommited.get>