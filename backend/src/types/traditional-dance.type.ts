
import { type InferSelectModel } from "drizzle-orm"
import { traditional_dance } from "../libs/schema.js"

export type TraditionalDance = InferSelectModel<typeof traditional_dance>;