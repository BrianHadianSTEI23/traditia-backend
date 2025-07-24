
import { type InferSelectModel } from "drizzle-orm"
import { folklore } from "../libs/schema.js"

export type Folklore = InferSelectModel<typeof folklore>;