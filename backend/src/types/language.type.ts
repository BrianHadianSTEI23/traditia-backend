
import { type InferSelectModel } from "drizzle-orm"
import { language } from "../libs/schema.js"

export type Language = InferSelectModel<typeof language>;