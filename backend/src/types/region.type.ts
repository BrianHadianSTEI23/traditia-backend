
import { type InferSelectModel } from "drizzle-orm"
import { region } from "../libs/schema.js"

export type Region = InferSelectModel<typeof region>;