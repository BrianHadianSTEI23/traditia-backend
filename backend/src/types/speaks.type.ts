
import { type InferSelectModel } from "drizzle-orm"
import { speaks } from "../libs/schema.js"

export type Speaks = InferSelectModel<typeof speaks>;