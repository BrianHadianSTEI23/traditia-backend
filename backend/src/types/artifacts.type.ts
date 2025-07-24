
import { type InferSelectModel } from "drizzle-orm"
import { artifacts } from "../libs/schema.js"

export type Artifact = InferSelectModel<typeof artifacts>;