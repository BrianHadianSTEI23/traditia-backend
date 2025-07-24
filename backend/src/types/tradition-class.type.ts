
import { type InferSelectModel } from "drizzle-orm"
import { traditional_class } from "../libs/schema.js"

export type TraditionalClass = InferSelectModel<typeof traditional_class>;