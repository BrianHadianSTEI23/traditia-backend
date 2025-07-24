
import { type InferSelectModel } from "drizzle-orm"
import { landmark } from "../libs/schema.js"

export type Landmark = InferSelectModel<typeof landmark>;