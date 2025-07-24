
import { type InferSelectModel } from "drizzle-orm"
import { user } from "../libs/schema.js"

export type User = InferSelectModel<typeof user>;