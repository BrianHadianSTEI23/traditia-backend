
import { type InferSelectModel } from "drizzle-orm"
import { wear } from "../libs/schema.js"

export type Wear = InferSelectModel<typeof wear>;