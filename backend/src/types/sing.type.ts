
import { type InferSelectModel } from "drizzle-orm"
import { sings } from "../libs/schema.js"

export type Sings = InferSelectModel<typeof sings>;