
import { type InferSelectModel } from "drizzle-orm"
import { eats } from "../libs/schema.js"

export type Eats = InferSelectModel<typeof eats>;