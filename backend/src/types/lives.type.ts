
import { type InferSelectModel } from "drizzle-orm"
import { lives } from "../libs/schema.js"

export type Lives = InferSelectModel<typeof lives>;