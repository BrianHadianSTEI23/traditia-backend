
import { type InferSelectModel } from "drizzle-orm"
import { tradition } from "../libs/schema.js"

export type Traditon = InferSelectModel<typeof tradition>;